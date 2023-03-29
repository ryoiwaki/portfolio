import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e2d083b6 = () => interopDefault(import('..\\pages\\concept\\index.vue' /* webpackChunkName: "pages/concept/index" */))
const _63bb1761 = () => interopDefault(import('..\\pages\\information\\index.vue' /* webpackChunkName: "pages/information/index" */))
const _306aa868 = () => interopDefault(import('..\\pages\\menu\\index.vue' /* webpackChunkName: "pages/menu/index" */))
const _8d99631e = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _5c397e09 = () => interopDefault(import('..\\pages\\information\\_id.vue' /* webpackChunkName: "pages/information/_id" */))
const _cc746732 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _e2d083b6,
    name: "concept"
  }, {
    path: "/information",
    component: _63bb1761,
    name: "information"
  }, {
    path: "/menu",
    component: _306aa868,
    name: "menu"
  }, {
    path: "/shop",
    component: _8d99631e,
    name: "shop"
  }, {
    path: "/information/:id",
    component: _5c397e09,
    name: "information-id"
  }, {
    path: "/",
    component: _cc746732,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
