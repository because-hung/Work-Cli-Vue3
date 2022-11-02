import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import testB from '../components/testB.vue'
import TestPage from '../views/TestPage.vue'
import funcPage from '../views/funcView.vue'
import TestPageSecond from '../views/TestPageSecond.vue'
import uiTest from '../views/uiTest.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/testb',
    name: 'testB',
    component: testB
  },
  {
    path: '/testP',
    name: 'testPage',
    component: TestPage
  },
  {
    path: '/func',
    name: 'funcPage',
    component: funcPage
  },
  {
    path: '/testPsec',
    name: 'testPageSecond',
    component: TestPageSecond
  },
  {
    path: '/testUi',
    name: 'testUi',
    component: uiTest
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

// rework

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: 'history',
  scrollBehavior (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})
export default router

// //rework
// router.afterEach((to, from, next) => {
// window.scrollTo(0, 0);
// })
