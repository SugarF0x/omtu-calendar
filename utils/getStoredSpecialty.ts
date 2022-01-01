import { Specialty } from "~/types"

export function getStoredSpecialty() {
  return localStorage.getItem("specialty") as Specialty | null
}
