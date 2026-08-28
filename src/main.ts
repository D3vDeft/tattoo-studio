import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import './styles/tailwind.css'
import App from './App.vue'
import router from './router'
import * as lucideIcons from 'lucide-vue-next'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.use(PrimeVue)
app.component('PButton', Button)
app.component('PCard', Card)

// Register lucide globally (register a few common icons as example)
import HomeIcon from 'lucide-vue-next/dist/esm/icons/home.js'
import PhoneIcon from 'lucide-vue-next/dist/esm/icons/phone.js'
app.component('IconHome', HomeIcon)
app.component('IconPhone', PhoneIcon)

app.mount('#app')
