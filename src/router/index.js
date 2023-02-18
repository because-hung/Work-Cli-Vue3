import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import testB from '../components/testB.vue'
import TestPage from '../views/TestPage.vue'
import funcPage from '../views/funcView.vue'
import TestPageSecond from '../views/TestPageSecond.vue'
import uiTest from '../views/uiTest.vue'
import eChart from '../views/func/eChart.vue'
import testInter from '../views/testInter.vue'
/* 切版 */
import SassUi from '../views/UI/SassUi.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/testInter',
    name: 'testInter',
    component: testInter
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
    path: '/echart',
    name: 'chart',
    component: eChart
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  /* UI */
  {
    path: '/sassui',
    name: 'sassui',
    component: SassUi
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
