import { createRouter, createWebHistory } from 'vue-router'

import AboutPage from '../views/AboutPage.vue'
import CodingPage from '../views/CodingPage.vue'
import MusicPage from '../views/MusicPage.vue'

const routes = [
  {
    path: '/',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/coding',
    name: 'coding',
    component: CodingPage
  },
  {
    path: '/music',
    name: 'music',
    component: MusicPage
  }


  //default option
  //{
    /*path: '/coding',
    name: 'coding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" \*\/ '../views/AboutView.vue')
    */
  //}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
