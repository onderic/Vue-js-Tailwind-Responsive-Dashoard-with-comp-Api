import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import apexcharts from '@/plugins/apexcharts';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(apexcharts);

// Default title tag
const defaultDocumentTitle = 'Admin Dashboard'

// Set document title from route meta
router.afterEach((to) => {
  document.title = to.meta?.title
    ? `${to.meta.title} — ${defaultDocumentTitle}`
    : defaultDocumentTitle
})

app.mount('#app')
