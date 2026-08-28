import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Services from '@/views/Services.vue'
import Gallery from '@/views/Gallery.vue'
import Contact from '@/views/Contact.vue'
import Policies from '@/views/Policies.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/services', name: 'Services', component: Services },
  { path: '/gallery', name: 'Gallery', component: Gallery },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/policies', name: 'Policies', component: Policies }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
