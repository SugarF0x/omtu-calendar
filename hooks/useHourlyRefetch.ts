import { onBeforeMount } from "#imports"
import { differenceInHours } from "date-fns"

export async function useHourlyRefetch(refetch: Function, updateTimestamp: string, dataRefetchInterval = 0) {
  onBeforeMount(() => {
    if (differenceInHours(new Date(), new Date(updateTimestamp)) >= dataRefetchInterval) refetch()
  })
}
