import { createApp } from 'vue'
import { createPinia } from 'pinia'

import {createBootstrap} from 'bootstrap-vue-next'
import App from './App.vue'
import './styles/main.scss'

const app = createApp(App)
const pinia = createPinia()

app.use(createBootstrap())
app.use(pinia)
app.mount('#app')