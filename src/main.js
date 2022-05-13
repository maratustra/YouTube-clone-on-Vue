import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

let app = createApp(App)

// для работы Vue devtools в google chrome
app.config.devtools = true
app.mount('#app')

