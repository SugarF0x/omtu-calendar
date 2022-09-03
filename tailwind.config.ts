import { Config } from "tailwindcss"
import daisyui from 'daisyui'

export default <Config> {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['synthwave'],
  },
}
