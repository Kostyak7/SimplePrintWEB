import MainPage from "@/pages/MainPage";
import FormPage from "@/pages/FormPage";
import CodePage from "@/pages/CodePage";
import InputCodePage from "@/pages/InputCodePage";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/v1',
        name: "main-page",
        component: MainPage,
    },
    {
        path: '/v1/print/form',
        name: "form-page-default",
        component: FormPage,
    },
    {
        path: '/v1/print/form/:printSet',
        name: "form-page",
        component: FormPage,
    },
    {
        path: '/v1/print/code/:code',
        name: "code-page",
        component: CodePage,
    },
    {
        path: '/v1/display',
        name: "input-code-page",
        component: InputCodePage,
    },
]


const router = createRouter({
    routes,
    history: createWebHistory('/')
    //history: createWebHistory(process.env.BASE_URL)
})

export default router;