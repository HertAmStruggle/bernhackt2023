import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/HomePage.vue') },
    ],
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/HomePage.vue') },
    ],
  },

  {
    path: '/gemeinden',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/gemeinden',
        component: () => import('pages/GemeindenPage.vue'),
      },
    ],
  },
  {
    path: '/umfrage',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/umfrage', component: () => import('pages/UmfragePage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
