console.log('main')
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createProjectRouter } from './router'

const app = createApp(App)
const router = createProjectRouter()

app.use(createPinia())
app.use(router)

app.mount('#app')
