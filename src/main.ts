import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import router from './router'
import { FontAwesomeRenderer } from '@/plugins/font-awesome'
import { initFirebase } from '@/plugins/firebase'

const initApp = async () => {
    await initFirebase()
    // @ts-ignore
    await createApp(App)
        .component('Fa', FontAwesomeRenderer)
        .use(store)
        .use(router)
        .mount('#app')
}

initApp().then(() => console.log('App initialized 🚀'))
