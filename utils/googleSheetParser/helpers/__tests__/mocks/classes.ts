import { ClassRawData } from "~/store/events"

export const MOCK_CLASSES_DATA = `/*O_o*/
google.visualization.Query.setResponse({"version":"0.6","reqId":"0","status":"ok","sig":"2130838110","table":{"cols":[{"id":"A","label":"","type":"string"},{"id":"B","label":"","type":"string"},{"id":"C","label":"","type":"string"},{"id":"D","label":"","type":"string"},{"id":"E","label":"","type":"string"},{"id":"F","label":"","type":"string"},{"id":"G","label":"","type":"string"},{"id":"H","label":"","type":"string"},{"id":"I","label":"","type":"string"},{"id":"J","label":"","type":"string"},{"id":"K","label":"","type":"string"},{"id":"L","label":"","type":"string"},{"id":"M","label":"","type":"string"},{"id":"N","label":"","type":"string"},{"id":"O","label":"","type":"string"},{"id":"P","label":"","type":"string"},{"id":"Q","label":"","type":"string"},{"id":"R","label":"","type":"string"},{"id":"S","label":"","type":"string"},{"id":"T","label":"","type":"string"},{"id":"U","label":"","type":"string"},{"id":"V","label":"","type":"string"},{"id":"W","label":"","type":"string"},{"id":"X","label":"","type":"string"},{"id":"Y","label":"","type":"string"}],"rows":[{"c":[{"v":"id"},{"v":"subjectId"},{"v":"groups"},{"v":"time"},{"v":"room"},{"v":"note"},{"v":"dates"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"1"},{"v":"protIP"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"215"},{"v":"-"},{"v":"21,28.02.2022 / 14,21,28.03.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"2"},{"v":"retail"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"512"},{"v":"-"},{"v":"04,11,18,25.04.2022 / 16,23,30.05.2022 / 06.06.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"3"},{"v":"neuro2"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"215"},{"v":"-"},{"v":"15,22.02.2022 / 01,15,22,29.03.2022 / 05.04.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"4"},{"v":"brand"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"215"},{"v":"-"},{"v":"12,19,26.04.2022 / 10,17,24,31.05.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"5"},{"v":"lead1"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"215"},{"v":"-"},{"v":"05.05.2022 / 03,07.06.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"6"},{"v":"eng"},{"v":"1"},{"v":"19:00 - 20:20"},{"v":"517"},{"v":"-"},{"v":"09,16.02.2022 / 02,09,16,23,30.03.2022 / 06,13,20,27.04.2022 / 04,11,18,25.05.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"7"},{"v":"eng"},{"v":"2"},{"v":"19:00 - 20:20"},{"v":"518"},{"v":"-"},{"v":"09,16.02.2022 / 02,09,16,23,30.03.2022 / 06,13,20,27.04.2022 / 04,11,18,25.05.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"8"},{"v":"eng"},{"v":"3"},{"v":"20:30 - 21:50"},{"v":"517"},{"v":"-"},{"v":"09,16.02.2022 / 02,09,16,23,30.03.2022 / 06,13,20,27.04.2022 / 04,11,18,25.05.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"9"},{"v":"eng"},{"v":"4"},{"v":"20:30 - 21:50"},{"v":"518"},{"v":"-"},{"v":"09,16.02.2022 / 02,09,16,23,30.03.2022 / 06,13,20,27.04.2022 / 04,11,18,25.05.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"10"},{"v":"internet"},{"v":"1,2"},{"v":"20:30 - 21:50"},{"v":"519"},{"v":"-"},{"v":"16.02.2022 / 02,09,16,23,30.03.2022 / 06,13,20,27.04.2022 / 04,11,18,25.05.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"11"},{"v":"internet"},{"v":"3,4"},{"v":"19:00 - 20:20"},{"v":"519"},{"v":"-"},{"v":"16.02.2022 / 02,09,16,23,30.03.2022 / 06,13,20,27.04.2022 / 04,11,18,25.05.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"12"},{"v":"finance2"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"214"},{"v":"-"},{"v":"01,08.06.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"13"},{"v":"enterp"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"115"},{"v":"-"},{"v":"17,25.02.2022 / 03,04,11,17,31.03.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"14"},{"v":"lux"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"206"},{"v":"-"},{"v":"17.02.2022 / 03,17,31.03.2022 / 14,28.04.2022 / 19.05.2022 / 02.06.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"15"},{"v":"digital"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"215"},{"v":"-"},{"v":"10,24.02.2022 / 10,24.03.2022 / 07,21.04.2022 / 12,26.05.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"16"},{"v":"hospit"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"206"},{"v":"-"},{"v":"11,18,25.02.2022 / 04,11,18,25.03.2022 / 01.04.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"17"},{"v":"iNeuro"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"206"},{"v":"-"},{"v":"08,22,29.04.2022 / 06,20.05.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"18"},{"v":"entertain"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"207"},{"v":"-"},{"v":"08,15,22,29.04.2022 / 06,13,20,27.05.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"19"},{"v":"eng"},{"v":"1"},{"v":"09:00 - 11:55"},{"v":"209"},{"v":"-"},{"v":"12,26.02.2022 / 12,26.03.2022 / 09.04.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"20"},{"v":"eng"},{"v":"2"},{"v":"09:00 - 11:55"},{"v":"210"},{"v":"-"},{"v":"12,26.02.2022 / 12,26.03.2022 / 09.04.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"21"},{"v":"eng"},{"v":"3"},{"v":"09:00 - 11:55"},{"v":"209"},{"v":"-"},{"v":"19.02.2022 / 05,19.03.2022 / 16.04.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"22"},{"v":"eng"},{"v":"4"},{"v":"09:00 - 11:55"},{"v":"210"},{"v":"-"},{"v":"19.02.2022 / 05,19.03.2022 / 16.04.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"23"},{"v":"eng"},{"v":"3"},{"v":"09:00 - 10:15"},{"v":"209"},{"v":"-"},{"v":"02.04.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"24"},{"v":"eng"},{"v":"4"},{"v":"09:00 - 10:15"},{"v":"210"},{"v":"-"},{"v":"02.04.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"25"},{"v":"enterp"},{"v":"-"},{"v":"12:55 - 17:20"},{"v":"115"},{"v":"По окончании - индивидуальный график"},{"v":"12,26.02.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"26"},{"v":"enterp"},{"v":"-"},{"v":"12:55 - 17:20"},{"v":"407"},{"v":"-"},{"v":"19.02.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"27"},{"v":"iNeuro"},{"v":"-"},{"v":"12:55 - 16:00"},{"v":"407"},{"v":"-"},{"v":"09,30.04.2022 / 21.05.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"28"},{"v":"lead2"},{"v":"-"},{"v":"3 пары"},{"v":"215"},{"v":"-"},{"v":"19.03.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"29"},{"v":"lead3"},{"v":"-"},{"v":"в 15:00"},{"v":"215"},{"v":"онлайн, 3 пары"},{"v":"18.06.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"30"},{"v":"finance2"},{"v":"-"},{"v":"12:55 - 17:20"},{"v":"215"},{"v":"-"},{"v":"05,12.03.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"31"},{"v":"protIP"},{"v":"-"},{"v":"12:55 - 17:20"},{"v":"215"},{"v":"-"},{"v":"26.03.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"32"},{"v":"sales"},{"v":"-"},{"v":"10:35 - 17:20"},{"v":"215"},{"v":"лекция"},{"v":"02.04.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"33"},{"v":"sales"},{"v":"1,2"},{"v":"10:35 - 17:20"},{"v":"115"},{"v":"семинар"},{"v":"16.04.2022 / 14.05.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"34"},{"v":"sales"},{"v":"3,4"},{"v":"10:35 - 17:20"},{"v":"115"},{"v":"семинар"},{"v":"23.04.2022 / 28.05.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"35"},{"v":"exEng"},{"v":"-"},{"v":"с 10 утра"},{"v":"-"},{"v":"-"},{"v":"09,10.06.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"36"},{"v":"exNeuro"},{"v":"-"},{"v":"с 10 утра"},{"v":"-"},{"v":"-"},{"v":"15.06.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"37"},{"v":"exIntern"},{"v":"-"},{"v":"с 10 утра"},{"v":"-"},{"v":"-"},{"v":"28.06.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"38"},{"v":"exIP"},{"v":"-"},{"v":"с 12 утра"},{"v":"-"},{"v":"-"},{"v":"25.06.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"39"},{"v":"exFin"},{"v":"-"},{"v":"с 10 утра"},{"v":"-"},{"v":"-"},{"v":"20.06.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"40"},{"v":"proj"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"5184"},{"v":"лекция"},{"v":"05,12,19,26.09.2022 / 03,10.10.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"41"},{"v":"proj"},{"v":"1,2"},{"v":"19:00 - 21:50"},{"v":"5184"},{"v":"семинар"},{"v":"17,31.10.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"42"},{"v":"proj"},{"v":"3,4"},{"v":"19:00 - 21:50"},{"v":"5184"},{"v":"семинар"},{"v":"24.10.2022 / 07.11.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"43"},{"v":"web"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"519"},{"v":"-"},{"v":"14,21,28.11.2022 / 05,12.12.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"44"},{"v":"eng"},{"v":"1"},{"v":"19:00 - 21:50"},{"v":"509"},{"v":"-"},{"v":"06,20.09.2022 / 04,18.10.2022 / 01,15,29.11.2022 / 13.12.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"45"},{"v":"eng"},{"v":"3"},{"v":"19:00 - 21:50"},{"v":"509"},{"v":"-"},{"v":"13,27.09.2022 / 11,25.10.2022 / 08,22.11.2022 / 06,20.12.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"46"},{"v":"iNeuro2"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"112"},{"v":"-"},{"v":"07,21.09.2022 / 05,19.10.2022 / 02,16,30.11.2022 / 14.12.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"47"},{"v":"entertain2"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"130"},{"v":"-"},{"v":"07,21.09.2022 / 05,19.10.2022 / 02,16,30.11.2022 / 14.12.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"48"},{"v":"enterp2"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"115"},{"v":"-"},{"v":"08,22.09.2022 / 06,20.10.2022 / 03,17.11.2022 / 01,15.12.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"49"},{"v":"retail2"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"130"},{"v":"-"},{"v":"15,29.09.2022 / 13,27.10.2022 / 10,24.11.2022 / 08,22.12.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"50"},{"v":"digital2"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"207"},{"v":"-"},{"v":"09,23.09.2022 / 07,21.10.2022 / 11,18,25.11.2022 / 09,23.12.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"51"},{"v":"hospit2"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"207"},{"v":"-"},{"v":"16,30.09.2022 / 14,28.10.2022 / 18.11.2022 / 02,16.12.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"52"},{"v":"eng"},{"v":"1"},{"v":"09:00 - 11:55"},{"v":"4054 и 1068"},{"v":"1-я пара в 4054, 2-я пара в 1068"},{"v":"03,17.09.2022 / 01,15,29.10.2022 / 12,26.11.2022 / 10,24.12.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"53"},{"v":"eng"},{"v":"3"},{"v":"09:00 - 11:55"},{"v":"4054 и 1068"},{"v":"1-я пара в 4054, 2-я пара в 1068"},{"v":"10,24.09.2022 / 08,22.10.2022 / 05,19.11.2022 / 03,17.12.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"54"},{"v":"adv"},{"v":"-"},{"v":"12:55 - 17:20"},{"v":"3030"},{"v":"-"},{"v":"03,10,17,24.09.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"55"},{"v":"qual"},{"v":"-"},{"v":"12:55 - 17:20"},{"v":"3030"},{"v":"Внимание: в каждый из дней аудитрия разная"},{"v":"01.10.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"56"},{"v":"eng"},{"v":"2"},{"v":"19:00 - 21:50"},{"v":"510"},{"v":"-"},{"v":"06,20.09.2022 / 04,18.10.2022 / 01,15,29.11.2022 / 13.12.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"57"},{"v":"eng"},{"v":"4"},{"v":"19:00 - 21:50"},{"v":"510"},{"v":"-"},{"v":"13,27.09.2022 / 11,25.10.2022 / 08,22.11.2022 / 06,20.12.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"58"},{"v":"lux2"},{"v":"-"},{"v":"19:00 - 21:50"},{"v":"130"},{"v":"-"},{"v":"14,28.09.2022 / 12,26.10.2022 / 09,23.11.2022 / 07,21.12.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"59"},{"v":"eng"},{"v":"2"},{"v":"09:00 - 11:55"},{"v":"4051 и 3056"},{"v":"1-я пара в 4051, 2-я пара в 3056"},{"v":"03,17.09.2022 / 01,15,29.10.2022 / 12,26.11.2022 / 10,24.12.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"60"},{"v":"eng"},{"v":"4"},{"v":"09:00 - 11:55"},{"v":"4051 и 3056"},{"v":"1-я пара в 4051, 2-я пара в 3056"},{"v":"10,24.09.2022 / 08,22.10.2022 / 05,19.11.2022 / 03,17.12.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"61"},{"v":"qual"},{"v":"-"},{"v":"12:55 - 17:20"},{"v":"3019"},{"v":"Внимание: в каждый из дней аудитрия разная"},{"v":"08.10.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"62"},{"v":"qual"},{"v":"-"},{"v":"12:55 - 17:20"},{"v":"314"},{"v":"Внимание: в каждый из дней аудитрия разная"},{"v":"15.10.2022"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]}],"parsedNumHeaders":0}});`
export const EXPECTED_CLASSES_RESULT: ClassRawData[] = [
  {
    "id": "1",
    "subjectId": "protIP",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "215",
    "note": "-",
    "dates": "21,28.02.2022 / 14,21,28.03.2022"
  },
  {
    "id": "2",
    "subjectId": "retail",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "512",
    "note": "-",
    "dates": "04,11,18,25.04.2022 / 16,23,30.05.2022 / 06.06.2022"
  },
  {
    "id": "3",
    "subjectId": "neuro2",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "215",
    "note": "-",
    "dates": "15,22.02.2022 / 01,15,22,29.03.2022 / 05.04.2022"
  },
  {
    "id": "4",
    "subjectId": "brand",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "215",
    "note": "-",
    "dates": "12,19,26.04.2022 / 10,17,24,31.05.2022"
  },
  {
    "id": "5",
    "subjectId": "lead1",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "215",
    "note": "-",
    "dates": "05.05.2022 / 03,07.06.2022"
  },
  {
    "id": "6",
    "subjectId": "eng",
    "groups": "1",
    "time": "19:00 - 20:20",
    "room": "517",
    "note": "-",
    "dates": "09,16.02.2022 / 02,09,16,23,30.03.2022 / 06,13,20,27.04.2022 / 04,11,18,25.05.2022"
  },
  {
    "id": "7",
    "subjectId": "eng",
    "groups": "2",
    "time": "19:00 - 20:20",
    "room": "518",
    "note": "-",
    "dates": "09,16.02.2022 / 02,09,16,23,30.03.2022 / 06,13,20,27.04.2022 / 04,11,18,25.05.2022"
  },
  {
    "id": "8",
    "subjectId": "eng",
    "groups": "3",
    "time": "20:30 - 21:50",
    "room": "517",
    "note": "-",
    "dates": "09,16.02.2022 / 02,09,16,23,30.03.2022 / 06,13,20,27.04.2022 / 04,11,18,25.05.2022"
  },
  {
    "id": "9",
    "subjectId": "eng",
    "groups": "4",
    "time": "20:30 - 21:50",
    "room": "518",
    "note": "-",
    "dates": "09,16.02.2022 / 02,09,16,23,30.03.2022 / 06,13,20,27.04.2022 / 04,11,18,25.05.2022"
  },
  {
    "id": "10",
    "subjectId": "internet",
    "groups": "1,2",
    "time": "20:30 - 21:50",
    "room": "519",
    "note": "-",
    "dates": "16.02.2022 / 02,09,16,23,30.03.2022 / 06,13,20,27.04.2022 / 04,11,18,25.05.2022"
  },
  {
    "id": "11",
    "subjectId": "internet",
    "groups": "3,4",
    "time": "19:00 - 20:20",
    "room": "519",
    "note": "-",
    "dates": "16.02.2022 / 02,09,16,23,30.03.2022 / 06,13,20,27.04.2022 / 04,11,18,25.05.2022"
  },
  {
    "id": "12",
    "subjectId": "finance2",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "214",
    "note": "-",
    "dates": "01,08.06.2022"
  },
  {
    "id": "13",
    "subjectId": "enterp",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "115",
    "note": "-",
    "dates": "17,25.02.2022 / 03,04,11,17,31.03.2022"
  },
  {
    "id": "14",
    "subjectId": "lux",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "206",
    "note": "-",
    "dates": "17.02.2022 / 03,17,31.03.2022 / 14,28.04.2022 / 19.05.2022 / 02.06.2022"
  },
  {
    "id": "15",
    "subjectId": "digital",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "215",
    "note": "-",
    "dates": "10,24.02.2022 / 10,24.03.2022 / 07,21.04.2022 / 12,26.05.2022"
  },
  {
    "id": "16",
    "subjectId": "hospit",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "206",
    "note": "-",
    "dates": "11,18,25.02.2022 / 04,11,18,25.03.2022 / 01.04.2022"
  },
  {
    "id": "17",
    "subjectId": "iNeuro",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "206",
    "note": "-",
    "dates": "08,22,29.04.2022 / 06,20.05.2022"
  },
  {
    "id": "18",
    "subjectId": "entertain",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "207",
    "note": "-",
    "dates": "08,15,22,29.04.2022 / 06,13,20,27.05.2022"
  },
  {
    "id": "19",
    "subjectId": "eng",
    "groups": "1",
    "time": "09:00 - 11:55",
    "room": "209",
    "note": "-",
    "dates": "12,26.02.2022 / 12,26.03.2022 / 09.04.2022"
  },
  {
    "id": "20",
    "subjectId": "eng",
    "groups": "2",
    "time": "09:00 - 11:55",
    "room": "210",
    "note": "-",
    "dates": "12,26.02.2022 / 12,26.03.2022 / 09.04.2022"
  },
  {
    "id": "21",
    "subjectId": "eng",
    "groups": "3",
    "time": "09:00 - 11:55",
    "room": "209",
    "note": "-",
    "dates": "19.02.2022 / 05,19.03.2022 / 16.04.2022"
  },
  {
    "id": "22",
    "subjectId": "eng",
    "groups": "4",
    "time": "09:00 - 11:55",
    "room": "210",
    "note": "-",
    "dates": "19.02.2022 / 05,19.03.2022 / 16.04.2022"
  },
  {
    "id": "23",
    "subjectId": "eng",
    "groups": "3",
    "time": "09:00 - 10:15",
    "room": "209",
    "note": "-",
    "dates": "02.04.2022"
  },
  {
    "id": "24",
    "subjectId": "eng",
    "groups": "4",
    "time": "09:00 - 10:15",
    "room": "210",
    "note": "-",
    "dates": "02.04.2022"
  },
  {
    "id": "25",
    "subjectId": "enterp",
    "groups": "-",
    "time": "12:55 - 17:20",
    "room": "115",
    "note": "По окончании - индивидуальный график",
    "dates": "12,26.02.2022"
  },
  {
    "id": "26",
    "subjectId": "enterp",
    "groups": "-",
    "time": "12:55 - 17:20",
    "room": "407",
    "note": "-",
    "dates": "19.02.2022"
  },
  {
    "id": "27",
    "subjectId": "iNeuro",
    "groups": "-",
    "time": "12:55 - 16:00",
    "room": "407",
    "note": "-",
    "dates": "09,30.04.2022 / 21.05.2022"
  },
  {
    "id": "28",
    "subjectId": "lead2",
    "groups": "-",
    "time": "3 пары",
    "room": "215",
    "note": "-",
    "dates": "19.03.2022"
  },
  {
    "id": "29",
    "subjectId": "lead3",
    "groups": "-",
    "time": "в 15:00",
    "room": "215",
    "note": "онлайн, 3 пары",
    "dates": "18.06.2022"
  },
  {
    "id": "30",
    "subjectId": "finance2",
    "groups": "-",
    "time": "12:55 - 17:20",
    "room": "215",
    "note": "-",
    "dates": "05,12.03.2022"
  },
  {
    "id": "31",
    "subjectId": "protIP",
    "groups": "-",
    "time": "12:55 - 17:20",
    "room": "215",
    "note": "-",
    "dates": "26.03.2022"
  },
  {
    "id": "32",
    "subjectId": "sales",
    "groups": "-",
    "time": "10:35 - 17:20",
    "room": "215",
    "note": "лекция",
    "dates": "02.04.2022"
  },
  {
    "id": "33",
    "subjectId": "sales",
    "groups": "1,2",
    "time": "10:35 - 17:20",
    "room": "115",
    "note": "семинар",
    "dates": "16.04.2022 / 14.05.2022"
  },
  {
    "id": "34",
    "subjectId": "sales",
    "groups": "3,4",
    "time": "10:35 - 17:20",
    "room": "115",
    "note": "семинар",
    "dates": "23.04.2022 / 28.05.2022"
  },
  {
    "id": "35",
    "subjectId": "exEng",
    "groups": "-",
    "time": "с 10 утра",
    "room": "-",
    "note": "-",
    "dates": "09,10.06.2022"
  },
  {
    "id": "36",
    "subjectId": "exNeuro",
    "groups": "-",
    "time": "с 10 утра",
    "room": "-",
    "note": "-",
    "dates": "15.06.2022"
  },
  {
    "id": "37",
    "subjectId": "exIntern",
    "groups": "-",
    "time": "с 10 утра",
    "room": "-",
    "note": "-",
    "dates": "28.06.2022"
  },
  {
    "id": "38",
    "subjectId": "exIP",
    "groups": "-",
    "time": "с 12 утра",
    "room": "-",
    "note": "-",
    "dates": "25.06.2022"
  },
  {
    "id": "39",
    "subjectId": "exFin",
    "groups": "-",
    "time": "с 10 утра",
    "room": "-",
    "note": "-",
    "dates": "20.06.2022"
  },
  {
    "id": "40",
    "subjectId": "proj",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "5184",
    "note": "лекция",
    "dates": "05,12,19,26.09.2022 / 03,10.10.2022"
  },
  {
    "id": "41",
    "subjectId": "proj",
    "groups": "1,2",
    "time": "19:00 - 21:50",
    "room": "5184",
    "note": "семинар",
    "dates": "17,31.10.2022"
  },
  {
    "id": "42",
    "subjectId": "proj",
    "groups": "3,4",
    "time": "19:00 - 21:50",
    "room": "5184",
    "note": "семинар",
    "dates": "24.10.2022 / 07.11.2022"
  },
  {
    "id": "43",
    "subjectId": "web",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "519",
    "note": "-",
    "dates": "14,21,28.11.2022 / 05,12.12.2022"
  },
  {
    "id": "44",
    "subjectId": "eng",
    "groups": "1",
    "time": "19:00 - 21:50",
    "room": "509",
    "note": "-",
    "dates": "06,20.09.2022 / 04,18.10.2022 / 01,15,29.11.2022 / 13.12.2022"
  },
  {
    "id": "45",
    "subjectId": "eng",
    "groups": "3",
    "time": "19:00 - 21:50",
    "room": "509",
    "note": "-",
    "dates": "13,27.09.2022 / 11,25.10.2022 / 08,22.11.2022 / 06,20.12.2022"
  },
  {
    "id": "46",
    "subjectId": "iNeuro2",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "112",
    "note": "-",
    "dates": "07,21.09.2022 / 05,19.10.2022 / 02,16,30.11.2022 / 14.12.2022"
  },
  {
    "id": "47",
    "subjectId": "entertain2",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "130",
    "note": "-",
    "dates": "07,21.09.2022 / 05,19.10.2022 / 02,16,30.11.2022 / 14.12.2022"
  },
  {
    "id": "48",
    "subjectId": "enterp2",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "115",
    "note": "-",
    "dates": "08,22.09.2022 / 06,20.10.2022 / 03,17.11.2022 / 01,15.12.2022"
  },
  {
    "id": "49",
    "subjectId": "retail2",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "130",
    "note": "-",
    "dates": "15,29.09.2022 / 13,27.10.2022 / 10,24.11.2022 / 08,22.12.2022"
  },
  {
    "id": "50",
    "subjectId": "digital2",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "207",
    "note": "-",
    "dates": "09,23.09.2022 / 07,21.10.2022 / 11,18,25.11.2022 / 09,23.12.2022"
  },
  {
    "id": "51",
    "subjectId": "hospit2",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "207",
    "note": "-",
    "dates": "16,30.09.2022 / 14,28.10.2022 / 18.11.2022 / 02,16.12.2022"
  },
  {
    "id": "52",
    "subjectId": "eng",
    "groups": "1",
    "time": "09:00 - 11:55",
    "room": "4054 и 1068",
    "note": "1-я пара в 4054, 2-я пара в 1068",
    "dates": "03,17.09.2022 / 01,15,29.10.2022 / 12,26.11.2022 / 10,24.12.2022"
  },
  {
    "id": "53",
    "subjectId": "eng",
    "groups": "3",
    "time": "09:00 - 11:55",
    "room": "4054 и 1068",
    "note": "1-я пара в 4054, 2-я пара в 1068",
    "dates": "10,24.09.2022 / 08,22.10.2022 / 05,19.11.2022 / 03,17.12.2022"
  },
  {
    "id": "54",
    "subjectId": "adv",
    "groups": "-",
    "time": "12:55 - 17:20",
    "room": "3030",
    "note": "-",
    "dates": "03,10,17,24.09.2022"
  },
  {
    "id": "55",
    "subjectId": "qual",
    "groups": "-",
    "time": "12:55 - 17:20",
    "room": "3030",
    "note": "Внимание: в каждый из дней аудитрия разная",
    "dates": "01.10.2022"
  },
  {
    "id": "56",
    "subjectId": "eng",
    "groups": "2",
    "time": "19:00 - 21:50",
    "room": "510",
    "note": "-",
    "dates": "06,20.09.2022 / 04,18.10.2022 / 01,15,29.11.2022 / 13.12.2022"
  },
  {
    "id": "57",
    "subjectId": "eng",
    "groups": "4",
    "time": "19:00 - 21:50",
    "room": "510",
    "note": "-",
    "dates": "13,27.09.2022 / 11,25.10.2022 / 08,22.11.2022 / 06,20.12.2022"
  },
  {
    "id": "58",
    "subjectId": "lux2",
    "groups": "-",
    "time": "19:00 - 21:50",
    "room": "130",
    "note": "-",
    "dates": "14,28.09.2022 / 12,26.10.2022 / 09,23.11.2022 / 07,21.12.2022"
  },
  {
    "id": "59",
    "subjectId": "eng",
    "groups": "2",
    "time": "09:00 - 11:55",
    "room": "4051 и 3056",
    "note": "1-я пара в 4051, 2-я пара в 3056",
    "dates": "03,17.09.2022 / 01,15,29.10.2022 / 12,26.11.2022 / 10,24.12.2022"
  },
  {
    "id": "60",
    "subjectId": "eng",
    "groups": "4",
    "time": "09:00 - 11:55",
    "room": "4051 и 3056",
    "note": "1-я пара в 4051, 2-я пара в 3056",
    "dates": "10,24.09.2022 / 08,22.10.2022 / 05,19.11.2022 / 03,17.12.2022"
  },
  {
    "id": "61",
    "subjectId": "qual",
    "groups": "-",
    "time": "12:55 - 17:20",
    "room": "3019",
    "note": "Внимание: в каждый из дней аудитрия разная",
    "dates": "08.10.2022"
  },
  {
    "id": "62",
    "subjectId": "qual",
    "groups": "-",
    "time": "12:55 - 17:20",
    "room": "314",
    "note": "Внимание: в каждый из дней аудитрия разная",
    "dates": "15.10.2022"
  }
]
