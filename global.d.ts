interface Window {
  CP_CONFIG: {
    BASE_API: string;
  };
}

declare module 'element-plus/dist/locale/zh-cn.mjs';

declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  const componentOptions: ComponentOptions;
  export default componentOptions;
}
