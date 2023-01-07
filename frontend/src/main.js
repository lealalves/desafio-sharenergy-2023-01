import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import Pagination from 'v-pagination-3';

const app = createApp(App)

app.component('pagination', Pagination);

app.use(router)

app.mount('#app')
