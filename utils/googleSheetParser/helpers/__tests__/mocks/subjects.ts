import { SubjectRawData } from "~/store/events"

export const MOCK_SUBJECTS_DATA = `/*O_o*/
google.visualization.Query.setResponse({"version":"0.6","reqId":"0","status":"ok","sig":"1889421812","table":{"cols":[{"id":"A","label":"","type":"string"},{"id":"B","label":"","type":"string"},{"id":"C","label":"","type":"string"},{"id":"D","label":"","type":"string"},{"id":"E","label":"","type":"string"},{"id":"F","label":"","type":"string"},{"id":"G","label":"","type":"string"},{"id":"H","label":"","type":"string"},{"id":"I","label":"","type":"string"},{"id":"J","label":"","type":"string"},{"id":"K","label":"","type":"string"},{"id":"L","label":"","type":"string"},{"id":"M","label":"","type":"string"},{"id":"N","label":"","type":"string"},{"id":"O","label":"","type":"string"},{"id":"P","label":"","type":"string"},{"id":"Q","label":"","type":"string"},{"id":"R","label":"","type":"string"},{"id":"S","label":"","type":"string"},{"id":"T","label":"","type":"string"},{"id":"U","label":"","type":"string"},{"id":"V","label":"","type":"string"},{"id":"W","label":"","type":"string"}],"rows":[{"c":[{"v":"id"},{"v":"title"},{"v":"professor"},{"v":"specs"},{"v":"color"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"finance2"},{"v":"Финансовое моделирование II"},{"v":"Шаренков Сергей Борисович"},{"v":"-"},{"v":"#3399FF"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"protIP"},{"v":"Практика защиты интеллектуальной собственности"},{"v":"Абдуриамова Дженнет Агамурадовна"},{"v":"-"},{"v":"#99CC66"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"retail"},{"v":"Введение в специализацию \u0027Маркетинг розничных сетей\u0027"},{"v":"Филатов Алексей Аркадьевич"},{"v":"RETAIL"},{"v":"#6699CC"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"neuro2"},{"v":"Нейромаркетинг II"},{"v":"Клепиков Олег Евгеньевич"},{"v":"-"},{"v":"#9966FF"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"brand"},{"v":"Создание и оценка бренда"},{"v":"Муразанов Алексей Викторович"},{"v":"-"},{"v":"#CC6699"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"eng"},{"v":"Английский"},{"v":"-"},{"v":"-"},{"v":"#FF9966"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"internet"},{"v":"Интернет-маркетинг"},{"v":"Слесарев Максим Александрович"},{"v":"-"},{"v":"#00CCCC"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"enterp"},{"v":"Введение в специализацию \u0027Предпринимательство\u0027"},{"v":"Хотяшева Ольга Михайловна"},{"v":"ENTERPRENEUR"},{"v":"#6699CC"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"lux"},{"v":"Введение в специализацию \u0027Маркетинг товаров категории люкс\u0027"},{"v":"Дадашева Эльнара Саладдиновна"},{"v":"LUX"},{"v":"#6699CC"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"digital"},{"v":"Введение в специализацию \u0027Digital-маркетинг\u0027"},{"v":"Слесарев Максим Александрович"},{"v":"DIGITAL"},{"v":"#6699CC"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"hospit"},{"v":"Введение в специализацию \u0027Маркетинг в индустрии гостепреимства\u0027"},{"v":"Кисеев Иван Дмитриевич"},{"v":"HOSPITALITY"},{"v":"#6699CC"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"iNeuro"},{"v":"Введение в специализацию \u0027Отраслевой нейромаркетинг\u0027"},{"v":"Клепиков Олег Евгеньевич"},{"v":"NEURO"},{"v":"#6699CC"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"entertain"},{"v":"Введение в специализацию \u0027Маркетинг в индустрии развлечений\u0027"},{"v":"Бельская Анастасия Александровна"},{"v":"ENTERTAIN"},{"v":"#6699CC"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"sales"},{"v":"Управление продажами"},{"v":"Хотяшева Ольга Михайловна"},{"v":"-"},{"v":"#FF6666"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"lead1"},{"v":"Leadership - Hays"},{"v":"-"},{"v":"-"},{"v":"-"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"lead2"},{"v":"Leadership"},{"v":"Tatiana Rowson"},{"v":"-"},{"v":"-"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"lead3"},{"v":"Leadership"},{"v":"Yulia McVeigh"},{"v":"-"},{"v":"-"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"exEng"},{"v":"Экзамен - Английский"},{"v":"-"},{"v":"-"},{"v":"#32CD32"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"exNeuro"},{"v":"Экзамен - Нейромаркетинг"},{"v":"-"},{"v":"-"},{"v":"#32CD32"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"exIntern"},{"v":"Экзамен - Интернет-маркетинг"},{"v":"-"},{"v":"-"},{"v":"#32CD32"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"exIP"},{"v":"Экзамен - Интеллектуальная собственность"},{"v":"-"},{"v":"-"},{"v":"#32CD32"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"exFin"},{"v":"Экзамен - Финансовое моделирование"},{"v":"-"},{"v":"-"},{"v":"#32CD32"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"proj"},{"v":"Управление проектами"},{"v":"Аншина Марина Львовна"},{"v":"-"},{"v":"#FF6666"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"web"},{"v":"Веб-аналитика"},{"v":"Слесарев Максим Александрович"},{"v":"-"},{"v":"#00CCCC"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"adv"},{"v":"Современные технологии в рекламе"},{"v":"Щелина Лидия Алексеевна"},{"v":"-"},{"v":"#CC6699"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"qual"},{"v":"Управление качеством"},{"v":"Барменков Евгений Юрьевич"},{"v":"-"},{"v":"#99CC66"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"retail2"},{"v":"Специализация \u0027Маркетинг розничных сетей\u0027"},{"v":"Филатов Алексей Аркадьевич"},{"v":"RETAIL"},{"v":"#9B59B6"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"enterp2"},{"v":"Специализация \u0027Предпринимательство\u0027"},{"v":"Хотяшева Ольга Михайловна"},{"v":"ENTERPRENEUR"},{"v":"#9B59B6"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"lux2"},{"v":"Специализация \u0027Маркетинг товаров категории люкс\u0027"},{"v":"Дадашева Эльнара Саладдиновна"},{"v":"LUX"},{"v":"#9B59B6"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"digital2"},{"v":"Специализация \u0027Digital-маркетинг\u0027"},{"v":"Слесарев Максим Александрович"},{"v":"DIGITAL"},{"v":"#9B59B6"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"hospit2"},{"v":"Специализация \u0027Маркетинг в индустрии гостепреимства\u0027"},{"v":"Кисеев Иван Дмитриевич"},{"v":"HOSPITALITY"},{"v":"#9B59B6"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"iNeuro2"},{"v":"Специализация \u0027Отраслевой нейромаркетинг\u0027"},{"v":"Клепиков Олег Евгеньевич"},{"v":"NEURO"},{"v":"#9B59B6"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":"entertain2"},{"v":"Специализация \u0027Маркетинг в индустрии развлечений\u0027"},{"v":"Бельская Анастасия Александровна"},{"v":"ENTERTAIN"},{"v":"#9B59B6"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]}],"parsedNumHeaders":0}});`
export const EXPECTED_SUBJECTS_RESULT: SubjectRawData[] = [
  {
    "id": "finance2",
    "title": "Финансовое моделирование II",
    "professor": "Шаренков Сергей Борисович",
    "specs": "-",
    "color": "#3399FF"
  },
  {
    "id": "protIP",
    "title": "Практика защиты интеллектуальной собственности",
    "professor": "Абдуриамова Дженнет Агамурадовна",
    "specs": "-",
    "color": "#99CC66"
  },
  {
    "id": "retail",
    "title": "Введение в специализацию 'Маркетинг розничных сетей'",
    "professor": "Филатов Алексей Аркадьевич",
    "specs": "RETAIL",
    "color": "#6699CC"
  },
  {
    "id": "neuro2",
    "title": "Нейромаркетинг II",
    "professor": "Клепиков Олег Евгеньевич",
    "specs": "-",
    "color": "#9966FF"
  },
  {
    "id": "brand",
    "title": "Создание и оценка бренда",
    "professor": "Муразанов Алексей Викторович",
    "specs": "-",
    "color": "#CC6699"
  },
  {
    "id": "eng",
    "title": "Английский",
    "professor": "-",
    "specs": "-",
    "color": "#FF9966"
  },
  {
    "id": "internet",
    "title": "Интернет-маркетинг",
    "professor": "Слесарев Максим Александрович",
    "specs": "-",
    "color": "#00CCCC"
  },
  {
    "id": "enterp",
    "title": "Введение в специализацию 'Предпринимательство'",
    "professor": "Хотяшева Ольга Михайловна",
    "specs": "ENTERPRENEUR",
    "color": "#6699CC"
  },
  {
    "id": "lux",
    "title": "Введение в специализацию 'Маркетинг товаров категории люкс'",
    "professor": "Дадашева Эльнара Саладдиновна",
    "specs": "LUX",
    "color": "#6699CC"
  },
  {
    "id": "digital",
    "title": "Введение в специализацию 'Digital-маркетинг'",
    "professor": "Слесарев Максим Александрович",
    "specs": "DIGITAL",
    "color": "#6699CC"
  },
  {
    "id": "hospit",
    "title": "Введение в специализацию 'Маркетинг в индустрии гостепреимства'",
    "professor": "Кисеев Иван Дмитриевич",
    "specs": "HOSPITALITY",
    "color": "#6699CC"
  },
  {
    "id": "iNeuro",
    "title": "Введение в специализацию 'Отраслевой нейромаркетинг'",
    "professor": "Клепиков Олег Евгеньевич",
    "specs": "NEURO",
    "color": "#6699CC"
  },
  {
    "id": "entertain",
    "title": "Введение в специализацию 'Маркетинг в индустрии развлечений'",
    "professor": "Бельская Анастасия Александровна",
    "specs": "ENTERTAIN",
    "color": "#6699CC"
  },
  {
    "id": "sales",
    "title": "Управление продажами",
    "professor": "Хотяшева Ольга Михайловна",
    "specs": "-",
    "color": "#FF6666"
  },
  {
    "id": "lead1",
    "title": "Leadership - Hays",
    "professor": "-",
    "specs": "-",
    "color": "-"
  },
  {
    "id": "lead2",
    "title": "Leadership",
    "professor": "Tatiana Rowson",
    "specs": "-",
    "color": "-"
  },
  {
    "id": "lead3",
    "title": "Leadership",
    "professor": "Yulia McVeigh",
    "specs": "-",
    "color": "-"
  },
  {
    "id": "exEng",
    "title": "Экзамен - Английский",
    "professor": "-",
    "specs": "-",
    "color": "#32CD32"
  },
  {
    "id": "exNeuro",
    "title": "Экзамен - Нейромаркетинг",
    "professor": "-",
    "specs": "-",
    "color": "#32CD32"
  },
  {
    "id": "exIntern",
    "title": "Экзамен - Интернет-маркетинг",
    "professor": "-",
    "specs": "-",
    "color": "#32CD32"
  },
  {
    "id": "exIP",
    "title": "Экзамен - Интеллектуальная собственность",
    "professor": "-",
    "specs": "-",
    "color": "#32CD32"
  },
  {
    "id": "exFin",
    "title": "Экзамен - Финансовое моделирование",
    "professor": "-",
    "specs": "-",
    "color": "#32CD32"
  },
  {
    "id": "proj",
    "title": "Управление проектами",
    "professor": "Аншина Марина Львовна",
    "specs": "-",
    "color": "#FF6666"
  },
  {
    "id": "web",
    "title": "Веб-аналитика",
    "professor": "Слесарев Максим Александрович",
    "specs": "-",
    "color": "#00CCCC"
  },
  {
    "id": "adv",
    "title": "Современные технологии в рекламе",
    "professor": "Щелина Лидия Алексеевна",
    "specs": "-",
    "color": "#CC6699"
  },
  {
    "id": "qual",
    "title": "Управление качеством",
    "professor": "Барменков Евгений Юрьевич",
    "specs": "-",
    "color": "#99CC66"
  },
  {
    "id": "retail2",
    "title": "Специализация 'Маркетинг розничных сетей'",
    "professor": "Филатов Алексей Аркадьевич",
    "specs": "RETAIL",
    "color": "#9B59B6"
  },
  {
    "id": "enterp2",
    "title": "Специализация 'Предпринимательство'",
    "professor": "Хотяшева Ольга Михайловна",
    "specs": "ENTERPRENEUR",
    "color": "#9B59B6"
  },
  {
    "id": "lux2",
    "title": "Специализация 'Маркетинг товаров категории люкс'",
    "professor": "Дадашева Эльнара Саладдиновна",
    "specs": "LUX",
    "color": "#9B59B6"
  },
  {
    "id": "digital2",
    "title": "Специализация 'Digital-маркетинг'",
    "professor": "Слесарев Максим Александрович",
    "specs": "DIGITAL",
    "color": "#9B59B6"
  },
  {
    "id": "hospit2",
    "title": "Специализация 'Маркетинг в индустрии гостепреимства'",
    "professor": "Кисеев Иван Дмитриевич",
    "specs": "HOSPITALITY",
    "color": "#9B59B6"
  },
  {
    "id": "iNeuro2",
    "title": "Специализация 'Отраслевой нейромаркетинг'",
    "professor": "Клепиков Олег Евгеньевич",
    "specs": "NEURO",
    "color": "#9B59B6"
  },
  {
    "id": "entertain2",
    "title": "Специализация 'Маркетинг в индустрии развлечений'",
    "professor": "Бельская Анастасия Александровна",
    "specs": "ENTERTAIN",
    "color": "#9B59B6"
  }
]
