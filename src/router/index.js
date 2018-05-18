import Vue from 'vue'
import Router from 'vue-router'
import AwardsAndJersey from '@/components/AwardsAndJersey'
import Home from '@/components/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/AwardsAndJersey',
      name: 'AwardsAndJersey',
      component: AwardsAndJersey
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
