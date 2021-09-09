<script lang='ts'>
import { defineComponent } from "@nuxtjs/composition-api"

interface Subject {
  title: string
  professor?: string
  // date strings or weekday number for weekly classes
  dates: string[] | number
  groups: number[],
  lesson: number[]
  class: number
}

const DATA: Subject[] = [
  {
    title: "Финансовое моделирование",
    professor: "Шаренков Сергей Борисович",
    dates: ["04.10", "11.10", "18.10", "25.10", "01.11", "08.11", "15.11", "22.11", "29.11"],
    groups: [1,2,3,4],
    lesson: [7,8],
    class: 214
  },{
    title: "Психология в бизнесе",
    professor: "Клепиков Олег Евгеньевич",
    dates: ["14.09", "21.09", "28.09", "05.10", "12.10", "19.10", "26.10", "02.11"],
    groups: [1,2,3,4],
    lesson: [7],
    class: 214
  },{
    title: "Нейромаркетинг",
    professor: "Клепиков Олег Евгеньевич",
    dates: ["09.11", "16.11", "23.11", "30.11", "14.12", "21.12"],
    groups: [1,2,3,4],
    lesson: [8],
    class: 214
  },{
    title: "Английский",
    dates: 3,
    groups: [1],
    lesson: [7],
    class: 509
  },{
    title: "Английский",
    dates: 3,
    groups: [2],
    lesson: [7],
    class: 510
  },{
    title: "Английский",
    dates: 3,
    groups: [3],
    lesson: [8],
    class: 509
  },{
    title: "Английский",
    dates: 3,
    groups: [4],
    lesson: [8],
    class: 510
  },{
    title: "Интернет-маркетинг",
    professor: "Слесарев Максим Алексендрович",
    dates: 3,
    groups: [1,2],
    lesson: [8],
    class: 519
  },{
    title: "Интернет-маркетинг",
    professor: "Слесарев Максим Алексендрович",
    dates: 3,
    groups: [3,4],
    lesson: [7],
    class: 519
  },{
    title: "Английский",
    dates: ["16.09", "30.09", "14.10", "28.10", "11.11", "25.11", "09.12", "23.12"],
    groups: [1],
    lesson: [7,8],
    class: 509
  },{
    title: "Английский",
    dates: ["16.09", "30.09", "14.10", "28.10", "11.11", "25.11", "09.12", "23.12"],
    groups: [2],
    lesson: [7,8],
    class: 510
  },{
    title: "Английский",
    dates: ["23.09", "07.10", "21.10", "04.11", "18.11", "02.12", "16.12"],
    groups: [3],
    lesson: [7,8],
    class: 509
  },{
    title: "Английский",
    dates: ["23.09", "07.10", "21.10", "04.11", "18.11", "02.12", "16.12"],
    groups: [4],
    lesson: [7,8],
    class: 510
  },{
    title: "Макро и Микротренды",
    professor: "Хотяшева Ольга Михайловна",
    dates: ["18.09", "25.09", "02.10"],
    groups: [1,2,3,4],
    lesson: [2,3,4,5],
    class: 315
  },{
    title: "Клиентоцентричность в сфере услуг",
    professor: "Краснослабодцев Александр Леонидович",
    dates: ["09.10", "16.10"],
    groups: [1,2,3,4],
    lesson: [2,3,4,5],
    class: 315
  },{
    title: "Event-менеджмент",
    professor: "Шойгу Ксения Сергеевна",
    dates: ["23.10", "30.10", "06.11", "13.11", "20.11", "27.11"],
    groups: [1,2,3,4],
    lesson: [2,3,4,5],
    class: 315
  },{
    title: "Управление изменениями",
    professor: "Нуфферова Татьяна Эммануиловна",
    dates: ["04.12", "11.12", "18.12"],
    groups: [1,2,3,4],
    lesson: [2,3,4,5],
    class: 315
  },
]

export default defineComponent({
  setup() {


    return {
      DATA
    }
  }
})
</script>

<template>
  <div>home</div>
</template>

<style lang='scss'>

</style>
