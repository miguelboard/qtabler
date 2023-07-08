import { RouteRecordRaw } from 'vue-router';

export const AUTH_ROUTE_NAMES = {
  ENTRIES: 'auth-entries',
  AUTH_LOGIN: 'auth-login',
  AUTH_REGISTER: 'auth-register',
};

export const authRoutes: RouteRecordRaw[] = [
  {
    name: AUTH_ROUTE_NAMES.ENTRIES,
    path: '/auth',
    component: () => import('src/layouts/auth-layout.vue'),
    children: [
      {
        name: AUTH_ROUTE_NAMES.AUTH_LOGIN,
        path: 'login',
        component: () => import('src/pages/auth/views/login-page.vue'),
      },
      {
        name: AUTH_ROUTE_NAMES.AUTH_REGISTER,
        path: 'register',
        component: () => import('src/pages/auth/views/register-page.vue'),
      },
    ],
  },
];
