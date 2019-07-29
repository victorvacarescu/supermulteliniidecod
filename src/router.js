import Vue from 'vue'
import Router from 'vue-router'
import Listare from './views/Listare.vue'
import Creare from './views/Creare.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'listare',
      component: Listare
    },
    {
      path: '/creare',
      name: 'creare',
      component: Creare
    }
  ]
})
