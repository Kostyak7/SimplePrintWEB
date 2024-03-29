import { createApp } from 'vue';
//import VueCookies from 'vue-cookies';
import App from './App.vue';
import components from '@/components/UI';
import router from "@/router";
import '@/assets/_styles.sass';
let VueScrollTo = require('vue-scrollto');

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(VueScrollTo)
    //.use(VueCookies)
    .use(router)
    .mount('#app')