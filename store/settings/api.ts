export async function fetchDataRequest(): Promise<{ ass: boolean } | Error> {
  return new Promise((resolve) => { setTimeout(() => { resolve(new Error('i am not yet implemented')) }, 2000) })
}
