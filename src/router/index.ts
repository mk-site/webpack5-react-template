import { lazy } from 'react';
import { TRouter } from './helper';

// 编写路由方式，方便控制页面路由权限
const router: TRouter = {
    'site-home': {
        path: '/home',
        component: lazy(() => import(/* webpackChunkName: 'page-home' */ 'pages/Home')),
    },
    'site-test': {
        path: '/test',
        component: lazy(() => import(/* webpackChunkName: 'page-test' */ 'pages/Test')),
    },
};
export default router;
