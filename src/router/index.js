import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import NotFound from '@/views/404';
import Home from '@/views/Home';
import Login from '@/views/Login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/404',
      name:'notFound',
      component:NotFound
    }
  ]
})
