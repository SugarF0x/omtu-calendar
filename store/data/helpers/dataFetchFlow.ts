import { Ref } from "@vue/reactivity"
import { fetchDoc } from "~/utils/googleSheetParser"
import { isError } from "~/utils"

export async function fetchDataFlow<T>(sheetId: string, course: number, sheet: string, guard: (data: unknown) => data is T, target: Ref<Array<T[]>>): Promise<void | never> {
  const response = await fetchDoc<T>(sheetId, sheet, guard)

  if (isError(response)) throw response
  target.value[Number(course)] = response
}
