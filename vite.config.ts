/// <reference types="vitest" />
import { join } from 'path'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /~(.+)/,
        replacement: join(__dirname, '/node_modules/$1')
      },

      {
        find: /@\//,
        replacement: join(__dirname, 'src/')
      },
    ]
  },

  test: {
    globals: true,
    environment: 'happy-dom'
  },

  server: {
    port: 4000,
  },

  plugins: [
    vue(),
    Components({
      dts: true,
      extensions: ['vue'],
      dirs: [
        'src/components',
        'src/pages'
      ]
    }),
    AutoImport({
      imports: [
        'pinia',
        '@vueuse/head',
        '@vueuse/core',
        'vue',
        'vue-router',
        'vitest',
      ],
      dts: 'src/auto-import.d.ts'
    })
  ]
})
