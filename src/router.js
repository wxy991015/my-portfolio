import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import InternExperienceDetails from './components/InternExperienceDetails.vue'

const routes = [
  { path: '/', component: App },
  { path: '/intern-experience/:idx', component: InternExperienceDetails, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 