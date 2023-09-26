import {createRouter, createWebHistory} from "vue-router";
import MainPage from "../pages/MainPage.vue";
import TextPage from "../pages/TextPage.vue";
import NewTextPage from "../pages/NewTextPage.vue";
import ErrorPage from "../pages/ErrorPage.vue";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/:id',
        component: TextPage
    },
    {
        path: '/text/add',
        component: NewTextPage
    },
    {
        path: '/error/404',
        component: ErrorPage
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/error/404'
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
