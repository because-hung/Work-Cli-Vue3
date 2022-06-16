import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap' // 從nodeModule中載入Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css' // Import css file

axios.defaults.withCredentials = true
createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')
