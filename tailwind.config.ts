import { Config } from "tailwindcss"
// @ts-ignore
import daisyui from 'daisyui'

export default <Config> {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['cupcake'],
  },
}
