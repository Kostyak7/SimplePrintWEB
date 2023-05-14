import MainPage from "@/pages/MainPage";
import FormPage from "@/pages/FormPage";
import CodePage from "@/pages/CodePage";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/v1',
        name: "main-page",
        component: MainPage,
    },
    {
        path: '/v1/print/form',
        name: "form-page",
        component: FormPage,
    },
    {
        path: '/v1/print/code/:code',
        name: "code-page",
        component: CodePage,
    },
]


const router = createRouter({
    routes,
    history: createWebHistory('/')
    //history: createWebHistory(process.env.BASE_URL)
})

export default router;