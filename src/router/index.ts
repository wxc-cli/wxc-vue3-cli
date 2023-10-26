import { createRouter, createWebHashHistory, onBeforeRouteUpdate } from 'vue-router';
import routes from './modules';

const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export { onBeforeRouteUpdate };
export default router;
