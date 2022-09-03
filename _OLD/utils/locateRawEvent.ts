import { RawEvent, TransformedEvent } from "~/types"

export function locateRawEvent(events: RawEvent[], event: TransformedEvent): RawEvent {
  const [eventId] = event.id.split('#')
  return events.find(entry => entry.id === eventId)!
}
