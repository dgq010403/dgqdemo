import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Page from '@/components/page'
import Classify from '@/components/Classify'
import Son from '@/components/son'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/home',
      name:'home',
      component:Home,
      children:[
        {
          path:'page',
          name:'page',
          component:Page,
          children:[
            {
              path:'son',
              name:'son',
              component:Son,
            }
          ]
        },
        {
          path:'classify',
          name:'classify',
          component:Classify
        },
      ]
    },
    {
      path:'/',
      redirect:'/home/page'
    }
  ]
})
