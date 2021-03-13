import { setupLayouts } from 'layouts-generated'
import generatedRoutes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import 'windi.css'
import App from './App.vue'
import './styles/main.css'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
)
