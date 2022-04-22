import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'
import windmill from '@windmill/react-ui/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS(), windmill({
    purge: [],
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [],
  })]
})
