import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './styles/common.scss'

import SelectComponent from './components/SelectCom.vue'
import modalComp from './modal/CommonModal.vue'

const app = createApp(App)
app.component('Select', SelectComponent)
app.component('Modal', modalComp)

app.use(createPinia())
app.use(router)

app.mount('#app')
