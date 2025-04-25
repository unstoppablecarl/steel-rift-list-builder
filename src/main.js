import { createApp } from 'vue'
import {createBootstrap} from 'bootstrap-vue-next'
import App from './App.vue'
import './main.scss'

const app = createApp(App)
app.use(createBootstrap())
app.mount('#app')