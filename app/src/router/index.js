import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import UnderConstruction from '@/components/UnderConstruction'
import Create from '@/components/create/Create'
import CreateEdit from '@/components/create/CreateEdit'
import CreatePresent from '@/components/create/CreatePresent'
import CreateExample from '@/components/create/CreateExample'
import CreateExamples from '@/components/create/CreateExamples'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'UnderConstruction',
      component: UnderConstruction
    },
    {
      path: '/skapa',
      name: 'Create',
      component: Create
    },
    {
      path: '/skapa/redigera',
      name: 'CreateEdit',
      component: CreateEdit
    },
    {
      path: '/skapa/visa',
      name: 'CreatePresent',
      component: CreatePresent
    },
    {
      path: '/skapa/exempel/:id?',
      name: 'CreateExample',
      component: CreateExample
    },
    /*{
      path: '/workshop',
      name: 'Workshop',
      component: WsInstructions
    }*/
  ]
})
