import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import VueCookies from 'vue-cookies';


if (localStorage.jwtToken){
    setAuthHeader(localStorage.jwtToken)
}else{
    setAuthHeader(false)
}
const app = createApp(App);
app.use(VueCookies);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap'
import setAuthHeader from "@/utils/SetAuthHeader";
