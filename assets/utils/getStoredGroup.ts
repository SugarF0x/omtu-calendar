export function getStoredGroup(): number | null {
  const group = localStorage.getItem("group")
  return group ? Number(group) : null
}
