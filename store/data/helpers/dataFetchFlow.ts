import { Ref } from "@vue/reactivity"
import { fetchDoc } from "~/utils/googleSheetParser"
import { isError } from "~/utils"

export async function fetchDataFlow<T>(sheetId: string, sheet: string, guard: (data: unknown) => data is T, course: number, error: Ref<Error | null>, target: Ref<Array<T[]>>) {
  const response = await fetchDoc<T>(sheetId, sheet, guard)

  if (isError(response)) error.value = response
  else target.value[Number(course)] = response
}
