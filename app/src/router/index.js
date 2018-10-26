import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import WsInstructions from '@/components/workshop/WsInstructions'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/workshop/:id?',
      name: 'Landing',
      component: Landing
    },
    /*{
      path: '/workshop',
      name: 'Workshop',
      component: WsInstructions
    }*/
  ]
})
