import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        name: '/login',
        path: '/login',
        component: () => import(/* webpackChunkName: "entry" */ '@/views/login/index.vue'),
        meta: {
            title: '登录',
        },
    },
    {
        name: '/register',
        path: '/register',
        component: () => import(/* webpackChunkName: "entry" */ '@/views/login/register.vue'),
        meta: {
            title: '注册用户',
        },
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
/**
 * 为页面添加标题,路由对象中添加meta.title属性
 */
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export default router;
