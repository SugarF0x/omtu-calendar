export function getInitialGroup(): number {
  const store = localStorage.getItem("group")
  if (store === null) {
    localStorage.setItem("group", "0")
    return 0
  }
  return parseInt(store)
}
