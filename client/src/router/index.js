import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@pages/HelloWorld'
import ThreeD from '@pages/ThreeD'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/threed',
      name: 'ThreeD',
      component: ThreeD
    }
  ]
})
