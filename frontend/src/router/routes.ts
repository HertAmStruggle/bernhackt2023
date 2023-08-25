import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/home',
        component: () => import('pages/HomePage.vue'),
      },
      {
        path: '/umfrage',
        component: () => import('pages/UmfragePage.vue'),
      },
      {
        path: '/gemeinden',
        component: () => import('pages/GemeindenPage.vue'),
      },
      {
        path: '/gemeinden/:id',
        component: () => import('pages/GemeindeDetailPage.vue'),
      },
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
