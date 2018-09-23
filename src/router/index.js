import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Inscription from '@/components/Inscription/Inscription'
import Connexion from '@/components/Connexion/Connexion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/inscription',
      name: 'Inscription',
      component: Inscription
    },
    {
      path: '/connexion',
      name: 'Connexion',
      component: Connexion
    }
  ]
})
