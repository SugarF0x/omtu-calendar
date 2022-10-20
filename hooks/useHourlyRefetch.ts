import { onBeforeMount } from "#imports"
import { differenceInHours } from "date-fns"

export async function useHourlyRefetch(refetch: Function, updateTimestamp: string, dataRefetchInterval?: number) {
  onBeforeMount(() => {
    if (dataRefetchInterval === undefined) return
    if (differenceInHours(new Date(updateTimestamp), new Date()) >= dataRefetchInterval) refetch()
  })
}
