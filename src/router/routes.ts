import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/main-layout.vue'),
    children: [{ path: '', component: () => import('pages/index-page.vue') }],
  },
  {
    path: '/auth',
    component: () => import('layouts/auth-layout.vue'),
    children: [
      { path: 'login', component: () => import('pages/auth/login-page.vue') },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/error/not-found.vue'),
  },
];

export default routes;
