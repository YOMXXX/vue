// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import $ from 'jquery'
import seller from './data.json'

window.$ = $
window.seller = seller
Vue.config.debug = true
Vue.use(VueRouter)

const routes = [{
  name: 'goods',
  path: '/goods',
  component: require('components/category/goods')
}, {
  path: '/',
  component: require('components/category/goods')
}]
const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  // iView.LoadingBar.start()
  next()
  // console.log(to, from)
})

router.afterEach((transition) => {
  // iView.LoadingBar.finish()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
