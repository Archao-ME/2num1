import Vue from 'vue'
import Router from 'vue-router'
import AwardsAndJersey from '@/components/AwardsAndJersey'
import Home from '@/components/Home'
import Chart from '@/components/Chart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {path: 1}
    },
    {
      path: '/AwardsAndJersey',
      name: 'AwardsAndJersey',
      component: AwardsAndJersey,
      meta: {path: 2}
    },
    {
      path: '/Chart/:yearId',
      name: 'Chart',
      component: Chart,
      meta: {path: 3}
    }
  ]
})
