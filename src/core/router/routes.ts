import { RouteRecordRaw } from 'vue-router';
import MailLayout from 'src/layouts/main-layout.vue';
import { AUTH_ROUTE_NAMES, authRoutes } from 'src/pages/auth/router';
import { PROFILE_ROUTE_NAMES, profileRoutes } from 'src/pages/profile/router';

export const ROUTE_NAMES = {
  HOME_PAGE: 'home-index',
  AUTH_ROUTE_NAMES,
  PROFILE_ROUTE_NAMES,
};

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MailLayout,
    name: ROUTE_NAMES.HOME_PAGE,
    children: [
      { path: '', component: () => import('src/pages/index-page.vue') },
    ],
  },
  ...authRoutes,
  ...profileRoutes,
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/error/not-found.vue'),
  },
];

export default routes;
