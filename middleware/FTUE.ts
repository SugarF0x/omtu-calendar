// @ts-ignore
export default function ({ store, redirect }) {
  for (const option in store.$accessor.options) {
    if (store.$accessor.options[option] === null) return redirect("/FTUE")
  }
}
