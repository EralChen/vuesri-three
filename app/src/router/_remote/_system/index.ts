import Layout from '@/layouts/default/index.vue'
import { RouteRecordRaw, RouterView } from 'vue-router'
import FORM from './form'
import MESSAGE from './message'

export default function () {
  return  {
    '/system': {
      component: Layout,
      meta: {
        header: true,
      },
      redirect: '/system/role',
    },
    '/system$': {
      component: null,
      redirect: '/system/role',
    },
    '/system/role': {
      component: () => import('@/views/_system/role/index.vue'),
    },
    '/system/menu': {
      component: () => import('@/views/_system/menu/index.vue'),
    },

    '/system/user': {
      component: () => import('@/views/_system/user/index.vue'),
    },

    '/system/workflow': {
      redirect: '/system/workflow/list',
    },
    '/system/workflow/list': {
      component: () => import('@/views/_system/workflow/index.vue'),
      meta: {
        breadcrumb: false,
      },
    },
    '/system/workflow/list/read/:id': {
      component: () => import('@/views/_system/workflow/read/index.vue'),
      props: true,
      meta: {
        hidden: true,
        tagsView: false,
      },
    },
    '/system/workflow/list/nodes/:flowId': {
      component: () => import('@/views/_system/workflow/nodes/index.vue'),
      props: true,
      meta: {
        hidden: true,
        tagsView: false,
      },
    },
    '/system/workflow/list/instances/:flowId': {
      component: () => import('@/views/_system/workflow/instances/index.vue'),
    },
    '/system/workflow/list/instances/:flowId/read/:id': {
      component: () => import('@/views/_system/workflow/instances/read/index.vue'),
    },
    '/system/data-model': {
      component: () => import('@/views/_system/data-model/index.vue'),
    },

    '/system/auth': {
      component: () => import('@/views/_system/auth/index.vue'),
    },

    '/system/button': {
      component: () => import('@/views/_system/button/index.vue'),
    },
    '/system/constant': {
      component: () => import('@/views/_system/constant/index.vue'),
    },
    ...FORM(),
    ...MESSAGE(),
  } as Record<string, Partial<RouteRecordRaw>>
}