import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SizeGuideView from '../views/SizeGuideView.vue'
import FAQsView from '../views/FAQsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-us',
      name: 'aboutus',
      component: AboutView
    },
    {
      path: '/size-guide',
      name: 'sizeguide',
      component: SizeGuideView
    },
    {
      path: '/faqs',
      name: 'faqs',
      component: FAQsView
    },
  ]
})

export default router
