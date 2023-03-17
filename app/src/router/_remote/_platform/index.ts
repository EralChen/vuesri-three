import Layout from '@/layouts/default/index.vue'
import { RouteRecordRaw } from 'vue-router'

export default function () {
  return  {
    '/platform': {
      component: Layout,
      meta: {
        header: true,
      },
      redirect: '/platform/tenant',
    },
    '/platform/tenant': {
      component: () => import('@/views/_platform/tenant/index.vue'),
    },
    '/system/data-model': {
      component: () => import('@/views/_system/data-model/index.vue'),
    },
  } as Record<string, Partial<RouteRecordRaw>>
}