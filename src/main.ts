import { createApp } from 'vue';
import router from '@/router';
import store from '@/stores';
import ElementPlus from '@/plugins/element';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import App from './App.vue';
import './style';

createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount('#app');
