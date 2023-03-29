import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _163b9487 = () => interopDefault(import('..\\pages\\concept\\index.vue' /* webpackChunkName: "pages/concept/index" */))
const _2ee8ecc3 = () => interopDefault(import('..\\pages\\information\\index.vue' /* webpackChunkName: "pages/information/index" */))
const _2f733d46 = () => interopDefault(import('..\\pages\\menu\\index.vue' /* webpackChunkName: "pages/menu/index" */))
const _8f883962 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _eb7d782a = () => interopDefault(import('..\\pages\\information\\_id.vue' /* webpackChunkName: "pages/information/_id" */))
const _5c9edfc5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/concept",
    component: _163b9487,
    name: "concept"
  }, {
    path: "/information",
    component: _2ee8ecc3,
    name: "information"
  }, {
    path: "/menu",
    component: _2f733d46,
    name: "menu"
  }, {
    path: "/shop",
    component: _8f883962,
    name: "shop"
  }, {
    path: "/information/:id",
    component: _eb7d782a,
    name: "information-id"
  }, {
    path: "/",
    component: _5c9edfc5,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
