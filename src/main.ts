import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import naive from 'naive-ui'

router.beforeEach((to, from, next) => {
    if (typeof (to.meta.title) === 'string') {
      document.title = to.meta.title;
    }
    next();
})
const app = createApp(App)
app.use(naive)
app.use(router)
app.mount('#app')
