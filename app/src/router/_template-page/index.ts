import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/default/index.vue'
export default [
  {
    path: '/_template-page',
    component: Layout,
    meta: {
      title: '模板页面',
      alwaysShow: true,
      icon: 'Document',
      header: true,
    },
    redirect: '/_template-page/table/basic',
    children: [
      {
        path: 'table',
        meta: {
          title: '表格页面',
        },
        redirect: '/_template-page/table/basic',
        children: [
          {
            path: 'basic',
            meta: {
              title: '基础表格',
            },
            component: () => import('@/views/_template-page/table/basic/index.vue'),
          },
          {
      
            meta: {
              title: '少量表格',
            },
            path: 'few',
            component: () => import('@/views/_template-page/table/few/index.vue'),
          
          },
          {
            path: 'with-map',
            meta: {
              title: '地图+表格',
            },
            component: () => import('@/views/_template-page/table/with-map/index.vue'),
          },
        ],
       
        
      },

      {
        path: 'form',
        meta: {
          title: '表单页面',
        },
        redirect: '/_template-page/form/basic',
        children: [
          {
            path: 'basic',
            meta: {
              title: '基础表单',
            },
            component: () => import('@/views/_template-page/form/basic/index.vue'),
          },
          {
          
            meta: {
              title: '多列表单',
            },
            path: 'multiple',
            component: () => import('@/views/_template-page/form/multiple/index.vue'),
          },
          {
            path: 'with-map',
            meta: {
              title: '地图+表单',
            },
            component: () => import('@/views/_template-page/form/with-map/index.vue'),
          },
        ],
        
      },
      
      {
        path: '填报页面',
        meta: {
          title: '填报页面',
        },
        redirect: '/_template-page/report/basic',
        children: [
          {
            path: 'dialog',
            meta: {
              title: '弹窗填报',
            },
            component: () => import('@/views/_template-page/report/dialog/index.vue'),
          },
        ],
      },

    ],
  },
] as RouteRecordRaw[]