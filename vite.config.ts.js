import VueI18n from '@intlify/vite-plugin-vue-i18n';
import Vue from '@vitejs/plugin-vue';
import Prism from 'markdown-it-prism';
import path from 'path';
import { defineConfig } from 'vite';
import ViteComponents from 'vite-plugin-components';
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons';
import Markdown from 'vite-plugin-md';
import Pages from 'vite-plugin-pages';
import { VitePWA } from 'vite-plugin-pwa';
import Layouts from 'vite-plugin-vue-layouts';
import WindiCSS from 'vite-plugin-windicss';

const ssrTransformCustomDir = () => {
  return {
    props: [],
    needRuntime: true
  };
};
var vite_config = defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`
    }
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      template: {
        compilerOptions: {
          directiveTransforms: {
            "nav-scroll": ssrTransformCustomDir
          }
        }
      }
    }),
    Pages({
      extensions: ["vue", "md"]
    }),
    Layouts(),
    Markdown({
      wrapperClasses: "prose prose-sm m-auto text-left",
      headEnabled: true,
      markdownItSetup(md) {
        md.use(Prism);
      }
    }),
    ViteComponents({
      extensions: ["vue", "md"],
      customLoaderMatcher: (id) => id.endsWith(".md"),
      customComponentResolvers: [
        (name) => {
          if (name.startsWith("El")) {
            const partialName = name[2].toLowerCase() + name.substring(3).replace(/[A-Z]/g, (l) => `-${l.toLowerCase()}`);
            return {
              path: `element-plus/lib/el-${partialName}`,
              sideEffects: `element-plus/lib/theme-chalk/el-${partialName}.css`
            };
          }
        },
        ViteIconsResolver({
          componentPrefix: ""
        })
      ]
    }),
    ViteIcons(),
    WindiCSS({
      safelist: "prose prose-sm m-auto text-left"
    }),
    VitePWA({
      manifest: {
        name: "Vitesse",
        short_name: "Vitesse",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    VueI18n({
      include: [path.resolve(__dirname, "locales/**")]
    })
  ],
  ssgOptions: {
    script: "async",
    formatting: "minify"
  },
  optimizeDeps: {
    include: [
      "vue",
      "vue-router",
      "@vueuse/core"
    ],
    exclude: [
      "vue-demi"
    ]
  }
});

export default vite_config;
export { ssrTransformCustomDir };
