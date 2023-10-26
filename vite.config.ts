import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': pathResolve('src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/style/var.scss" as *;
        `,
      },
    },
  },
  // 打包配置
  build: {
    target: 'modules',
    outDir: 'dist', // 指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    minify: 'terser', // 混淆器，terser构建后文件体积更小
  },
  // 本地运行配置，及反向代理配置
  server: {
    cors: true, // 默认启用并允许任何源
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    port: 8888,
  },
});
