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

// lucide (replaced deprecated package)
import { Home, Phone } from '@lucide/vue'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.use(PrimeVue)
app.component('PButton', Button)
app.component('PCard', Card)

// Register a couple of icons globally; import and add more as needed
app.component('IconHome', Home)
app.component('IconPhone', Phone)

app.mount('#app')
