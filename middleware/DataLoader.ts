import { Sheets } from "~/store/data"

// @ts-ignore
export default function ({ store, redirect }) {
  const sheets = store.$accessor.data.sheets as Sheets

  if ([
    sheets.core,
    sheets.amendments,
    sheets.specialties
  ].some((data: any[]) => !data.length)) return redirect("/loading")
}
