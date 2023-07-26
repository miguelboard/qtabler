import { RouteRecordRaw } from 'vue-router';
import { AUTH_ROUTE_NAMES, authRoutes } from 'src/pages/auth/router';
import MailLayout from 'src/layouts/main-layout.vue';

export const ROUTE_NAMES = {
  AUTH_ROUTE_NAMES,
  LANDING_PAGE: 'home-landing-page',
  DASHBOARD: 'home-dashboard',
};

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: ROUTE_NAMES.DASHBOARD,
    component: MailLayout,
    children: [
      { path: '', component: () => import('src/pages/index-page.vue') },
    ],
  },
  {
    path: '/welcome',
    name: ROUTE_NAMES.LANDING_PAGE,
    component: MailLayout,
    children: [
      { path: '', component: () => import('src/pages/index-page.vue') },
    ],
  },
  ...authRoutes,
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/error/not-found.vue'),
  },
];

export default routes;
