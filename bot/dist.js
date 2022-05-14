function normalizeRow (rows) {
  return rows.map((row) => (row && (row.v !== null && row.v !== undefined)) ? row : {})
}

function applyHeaderIntoRows (header, rows) {
  return rows
    .map(({ c: row }) => normalizeRow(row))
    .map((row) => row.reduce((p, c, i) => c.v ? Object.assign(p, { [header[i]]: c.v }) : p, {}))
}

function getItems (spreadsheetResponse) {
  let rows = []

  try {
    const parsedJSON = JSON.parse(spreadsheetResponse.split('\n')[1].replace(/google.visualization.Query.setResponse\(|\);/g, ''))
    const hasSomeLabelPropertyInCols = parsedJSON.table.cols.some(({ label }) => !!label)
    if (hasSomeLabelPropertyInCols) {
      const header = parsedJSON.table.cols.map(({ label }) => label)

      rows = applyHeaderIntoRows(header, parsedJSON.table.rows)
    } else {
      const [headerRow, ...originalRows] = parsedJSON.table.rows
      const header = normalizeRow(headerRow.c).map((row) => row.v)

      rows = applyHeaderIntoRows(header, originalRows)
    }
  } catch (e) {}

  return rows
}

function replaceDashWithUndefined(value) {
  if (value === '-') return undefined
  return value
}

function getColorFromText(value) {
  let hash = 0
  for (let i = 0; i < value.length; i++) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const hexValue = (hash >> (i * 8)) & 0xFF;
    color += ('00' + hexValue.toString(16)).substr(-2);
  }
  return color;
}

function parse(value) {
  const [day, month, year] = value.split('.')
  return new Date(`${month}.${day}.${year}`)
}

function isBefore(foo, bar) {
  return foo.valueOf() < bar.valueOf()
}

function endOfDay(date) {
  const newDate = new Date(date)
  newDate.setHours(23, 59, 59, 999)
  return newDate
}

function startOfDay(date) {
  const newDate = new Date(date)
  newDate.setHours(0, 0, 0, 0)
  return newDate
}

function isSameDay(foo, bar) {
  const start = startOfDay(foo)
  const end = endOfDay(foo)
  return start.valueOf() < bar.valueOf() && end.valueOf() > bar.valueOf()
}

function setHours(date, hours) {
  const newDate = new Date(date)
  newDate.setHours(Number(hours))
  return newDate
}

function setMinutes(date, minutes) {
  const newDate = new Date(date)
  newDate.setMinutes(minutes)
  return newDate
}

function applyTime(date, time) {
  const [start] = time.split(' - ')
  if (isNaN(Number(start.replace(/:/g,'')))) return endOfDay(date)

  const [hours, minutes] = start.split(':')
  return setHours(setMinutes(date, Number(minutes)), Number(hours))
}

const DAYS_FORMAT = "dd.MM.yyyy"
// separator between ranges with different months
const MONTHS_SEPARATOR = '/'
// separator between days-months-years
const DATE_SEPARATOR = '.'
// separator between days within single range
const DAYS_SEPARATOR = ','

function parseDates(dates) {
  const result = []

  const splitAndStrippedDates = dates.split(MONTHS_SEPARATOR).map(date => date.trim())
  for (const months of splitAndStrippedDates) {
    const [days, month, year] = months.split(DATE_SEPARATOR)
    for (const day of days.split(DAYS_SEPARATOR)) {
      const date = `${day}.${month}.${year}`
      if (date.length !== DAYS_FORMAT.length || isNaN(Number(`${day}${month}${year}`))) reject(`Неверный формат даты: ${splitAndStrippedDates}`)
      result.push(`${day}.${month}.${year}`)
    }
  }

  return result
}

function request(url) {
  return new Promise((success, fail) => {
    utils.request({ method: 'GET', url }, function (error, response, body) {
      if (error) fail(error)
      success(getItems(body))
    });
  })
}

function parseSheets(sheets) {
  const formatted = {
    specialties: {},
    subjects: [],
    events: []
  }

  for (const entry of sheets.specialties) {
    formatted.specialties[entry.id] = entry.title
  }

  for (const entry of sheets.subjects) {
    const { course, title, id } = entry
    formatted.subjects.push({
      professor: replaceDashWithUndefined(entry.professor),
      color:  entry.color === '-' ? getColorFromText(entry.title) : entry.color,
      specs: entry.specs === '-' ? Object.keys(formatted.specialties) : entry.specs.split(','),
      id,
      course,
      title
    })
  }

  for (const entry of sheets.events) {
    const { id, subjectId, time, room, course } = entry
    formatted.events.push({
      note: replaceDashWithUndefined(entry.note),
      groups: entry.groups === '-' ? [1,2,3,4] : entry.groups.split(',').map(item => Number(item)),
      dates: parseDates(entry.dates),
      id,
      subjectId,
      time,
      room,
      course
    })
  }

  return formatted
}

function getEvents(parsedSheets) {
  const events = []

  for (const entry of parsedSheets.events) {
    for (const day of entry.dates) {
      const subject = parsedSheets.subjects.find(subj => subj.id === entry.subjectId && subj.course === entry.course)
      if (!subject) reject('Неопознанный ID предмета')

      const dayIndex = entry.dates.indexOf(day) + 1

      const { note, time, room, groups, course } = entry
      events.push({
        id: `${entry.id}#${dayIndex}`,
        date: applyTime(parse(day), entry.time),
        note,
        time,
        room,
        groups,
        course,
        subject
      })
    }
  }

  return events
}

function replaceDashes(text) {
  return text.replace('-', '‑')
}

function formatResponse(events) {
  return events.map((val) => {
    let result = `*_${val.subject.title}_*

*Языковые*: ${val.groups.join(', ')}
*Аудитория*: ${val.room}
*Преподаватель*: ${val.subject.professor}
*Время*: ${val.time}`

    if (val.note !== '-') result += `\n*Примечание*: ${val.note}`

    return replaceDashes(result)
  }, '').join('\n\n‑‑‑‑‑\n\n')
}

const SPECIALTY_URL = 'https://docs.google.com/spreadsheets/d/1sTEvkTc0QIcec_AUjcflMijUau2fnwIyNnLZU-kcsgA/gviz/tq?sheet=%D0%A1%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F'
const SUBJECTS_URL = 'https://docs.google.com/spreadsheets/d/1sTEvkTc0QIcec_AUjcflMijUau2fnwIyNnLZU-kcsgA/gviz/tq?sheet=%D0%9F%D1%80%D0%B5%D0%B4%D0%BC%D0%B5%D1%82%D1%8B'
const CLASSES_URL = 'https://docs.google.com/spreadsheets/d/1sTEvkTc0QIcec_AUjcflMijUau2fnwIyNnLZU-kcsgA/gviz/tq?sheet=%D0%97%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D1%8F'

async function main() {
  const [rawSpecialty, rawSubjects, rawClasses] = await Promise.all([
    request(SPECIALTY_URL),
    request(SUBJECTS_URL),
    request(CLASSES_URL),
  ]).catch(e => reject(e))

  const rawSheets = {
    specialties: rawSpecialty,
    subjects: rawSubjects,
    events: rawClasses
  }

  const today = new Date()

  const parsedSheets = parseSheets(rawSheets)
  const events = getEvents(parsedSheets)

  const todayEvents = events.filter((event) => {
    return isSameDay(event.date, today)
    // const isDayMatch = isSameDay(event.date, today)
    // const isCourseMatch = event.course === 1
    // const isGroupMatch = event.groups.includes(group.value)
    // const isForAllSpecialties = event.subject.specs.length === accessor.data.sheets.specialties.length
    // const isSpecialtyMatch = isForAllSpecialties || event.subject.specs.some(entry => specialties.value.includes(entry))

    // return isDayMatch && isCourseMatch && isGroupMatch && isSpecialtyMatch
  }).sort((a, b) => (isBefore(a.date, b.date) ? -1 : 1))

  if (!todayEvents.length) resolve('Сегодня занятий нет!')

  resolve(formatResponse(todayEvents))
}

main()
