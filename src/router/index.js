import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Inscription from '@/components/Inscription/Inscription'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/inscription',
      name: 'Inscription',
      component: Inscription
    }
  ]
})
