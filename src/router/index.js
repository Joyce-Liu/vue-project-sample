import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import About from '@/page/about/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})


