import { createApp } from 'vue'
import { createPinia } from 'pinia'
/*import bootstrap css och js efter att vi har installera boobstrap i termonal med npm install bootstrap */
// import "bootstrap/dist/css/bootstrap.css"
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js"
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'

import './assets/base.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
/*först har vi importera bootstrap sen för att kunna använda bootstrap */
app.use(bootstrap)
Vue.use(BootstrapVue)

app.mount('#app')
