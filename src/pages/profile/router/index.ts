import { RouteRecordRaw } from 'vue-router';

export const PROFILE_ROUTE_NAMES = {
  ENTRIES: 'profile-entries',
  PROFILE_GENERAL: 'profile-general',
  PROFILE_SECURITY: 'profile-security',
  PROFILE_OTHER: 'profile-other',
  PROFILE_SETTINGS: 'profile-settings',
};

export const profileRoutes: RouteRecordRaw[] = [
  {
    name: PROFILE_ROUTE_NAMES.ENTRIES,
    path: '/profile',
    component: () => import('src/layouts/main-layout.vue'),
    children: [
      {
        name: PROFILE_ROUTE_NAMES.PROFILE_GENERAL,
        path: 'geneal',
        component: () => import('src/pages/profile/views/general-page.vue'),
      },
      {
        name: PROFILE_ROUTE_NAMES.PROFILE_SECURITY,
        path: 'security',
        component: () => import('src/pages/profile/views/security-page.vue'),
      },
      {
        name: PROFILE_ROUTE_NAMES.PROFILE_SETTINGS,
        path: 'settings',
        component: () => import('src/pages/profile/views/settings-page.vue'),
      },
      {
        name: PROFILE_ROUTE_NAMES.PROFILE_OTHER,
        path: 'other',
        component: () => import('src/pages/profile/views/other-page.vue'),
      },
    ],
  },
];
