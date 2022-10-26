import { onBeforeMount } from "#imports"
import { differenceInHours } from "date-fns"
import { Ref } from "@vue/reactivity"

export function useHourlyRefetch(refetch: Function, updateTimestamp: Ref<string>, dataRefetchInterval = 0) {
  onBeforeMount(() => {
    if (differenceInHours(new Date(), new Date(updateTimestamp.value)) >= dataRefetchInterval) refetch()
  })
}
