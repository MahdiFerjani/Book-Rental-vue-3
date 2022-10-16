import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FlashMessage from '@smartweb/vue-flash-message';





const myApp=createApp(App).use(router).use(FlashMessage)

myApp.mount('#app')
