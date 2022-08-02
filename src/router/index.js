import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConnectView from '../views/ConnectView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
        alias: '/home',
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../views/AboutView.vue')
    },
    {
        path: '/products',
        name: 'products',
        component: () =>
            import ('../components/products')
    },
    {
        path: '/connect',
        name: 'connect',
        component: ConnectView,
        alias: '/con',

    },
    {
        path: '/testapi',
        name: 'testapi',
        component: () =>
            import ('../components/testapi')
    },
    {
        path: '/users/:userId',
        name: 'users',
        component: () =>
            import ('../components/users'),
        children: [{
            path: 'posts',
            name: ':userId/posts',
            component: () =>
                import ('../components/Post')

        }]

    },
    {
        path: '/articles',
        name: 'articles',
        /*     beforeEnter: (to, from) => {
                 return false;
             },
             經註冊後就不得再使用
         */
        component: () =>
            import ('../components/article/Articles'),

    },
    {
        path: '/articles/:pk',
        name: 'articles/:pk',
        component: () =>
            import ('../components/article/Articlepost'),
    },


]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to, from) => {
    console.log(from, to);
});
router.afterEach((to, from, failure) => {
    if (!failure) {

    } else { //跳轉失敗
        alert("YOU GOT WRONG WAY", failure);
    }
})


export default router