import { RouteRecordRaw } from 'vue-router';
import { AUTH_ROUTE_NAMES, authRoutes } from 'src/pages/auth/router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/main-layout.vue'),
    children: [{ path: '', component: () => import('pages/index-page.vue') }],
  },
  ...authRoutes,
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/error/not-found.vue'),
  },
];

export const ROUTE_NAMES = {
  AUTH_ROUTE_NAMES,
};

export default routes;
