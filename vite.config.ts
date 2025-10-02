import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',               // 打包输出目录
    assetsDir: '',                // 不创建额外的 assets 目录
    rollupOptions: {
      input: path.resolve(__dirname, 'src/index.ts'),  // 设置入口文件
      output: {
        format: 'es',              // 输出为 ES 模块格式
        entryFileNames: '[name].js', // 保持源文件名
        assetFileNames: 'Vue3DraggableResizable.css', // 强制 CSS 文件名为 Vue3DraggableResizable.css
      },
    },
    // @ts-ignore
    esbuild: {
      target: 'esnext',            // 编译为现代 JavaScript
    },
    emptyOutDir: true,             // 清空输出目录
  },
})
