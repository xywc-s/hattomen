import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Vue from '@vitejs/plugin-vue'
import Prism from 'markdown-it-prism'
import path from 'path'
import { defineConfig } from 'vite'
import ViteComponents from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'
import { VitePWA } from 'vite-plugin-pwa'
import Layouts from 'vite-plugin-vue-layouts'
import WindiCSS from 'vite-plugin-windicss'

export const ssrTransformCustomDir = () => {
  return {
    props: [],
    needRuntime: true
  }
}

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      template:{
        compilerOptions: {
          directiveTransforms:{
            'nav-scroll': ssrTransformCustomDir
          },
          
        }
      }
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/vite-plugin-md
    Markdown({
      wrapperClasses: 'prose prose-sm m-auto text-left',
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
      },
    }),

    // https://github.com/antfu/vite-plugin-components
    ViteComponents({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      customLoaderMatcher: id => id.endsWith('.md'),

      customComponentResolvers: [
        (name)=>{
          if (name.startsWith('El')) {
            const partialName = name[2].toLowerCase() + name.substring(3).replace(/[A-Z]/g, l => `-${l.toLowerCase()}`)
            return {
              path: `element-plus/lib/el-${partialName}`,
              sideEffects: `element-plus/lib/theme-chalk/el-${partialName}.css`,
            }
          }
        },
        
        // auto import icons
        // https://github.com/antfu/vite-plugin-icons
        ViteIconsResolver({
          componentPrefix: '',
          // enabledCollections: ['carbon']
        }),
      ],
    }),

    // https://github.com/antfu/vite-plugin-icons
    ViteIcons(),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
      safelist: 'prose prose-sm m-auto text-left',
    }),

    // https://github.com/intlify/vite-plugin-vue-i18n
    VueI18n({
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    VitePWA({
      registerType: 'autoUpdate', 
    })
  ],
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
    exclude: [
      'vue-demi',
    ],
  },
})
