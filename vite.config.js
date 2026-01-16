import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'
// https://vite.dev/config/

export default defineConfig(({ mode }) => {
  // 讀取 .env、.env.[mode]，第三個參數用 '' 才會包含非 VITE_ 前綴（你目前都 VITE_，但習慣上這樣寫）
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue(),
      // vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/variables" as *;
            @use "@/assets/styles/mixins" as *;
          `,
        },
      },
    },
    // server: {
    //   port: 5555
    // },
    base: env.VITE_BASE || '/',
    build: {
      outDir: env.VITE_OUT_DIR || 'dist',
    },
  }
})
