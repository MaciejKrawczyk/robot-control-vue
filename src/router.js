import { createRouter, createWebHistory } from 'vue-router'
import Manual from "./components/Manual.vue";
import Program from "./components/Program.vue";
import Registry from "./components/Registry.vue";
import Home from "./components/Home.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/manual',
    name: 'manual',
    component: Manual
  },
  {
    path: '/program',
    name: 'program',
    component: Program
  },
  {
    path: '/registry',
    name: 'registry',
    component: Registry
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router