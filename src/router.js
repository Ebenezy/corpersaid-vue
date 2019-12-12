import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Landing from './views/Landing/Landing.vue'
import View from './views/Landing/View.vue'
import Login from './views/Login/Login.vue'
import Register from './views/Register/Register.vue'
import Forget from './views/Forget/Forget.vue'
import Tolet from './views/Tolet/ToLet.vue'
import ForSale from './views/ForSale/ForSale.vue'
import Services from './views/Services/Services.vue'
import Ppa from './views/Ppa/Ppa.vue'
import Profile from './views/Profile/Profile.vue'
import Subscription from './views/Subscription/Subscription.vue'
import Notification from './views/Notification/Notification.vue'
import Messages from './views/Messages/Messages.vue'
import MyPost from './views/MyPost/MyPost.vue'
import PostProduct from './views/PostProduct/PostProduct.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
      {
          path: '/View',
          name: 'View',
          component: View
      },
      {
          path: '/Login',
          name: 'Login',
          component: Login
      },
      {
          path: '/Register',
          name: 'Register',
          component: Register
      },
      {
          path: '/Forget',
          name: 'Forget',
          component: Forget
      },
      {
          path: '/Tolet',
          name: 'Tolet',
          component: Tolet
      },
      {
          path: '/ForSale',
          name: 'ForSale',
          component: ForSale
      },
      {
          path: '/Services',
          name: 'Services',
          component: Services
      },
      {
          path: '/Ppa',
          name: 'Ppa',
          component: Ppa
      },
      {
          path: '/Profile',
          name: 'Profile',
          component: Profile
      },
      {
          path: '/Subscription',
          name: 'Subscription',
          component: Subscription
      },
      {
          path: '/Notification',
          name: 'Notification',
          component: Notification
      },
      {
          path: '/Messages',
          name: 'Messages',
          component: Messages
      },
      {
          path: '/MyPost',
          name: 'MyPost',
          component: MyPost
      },
      {
          path: '/PostProduct',
          name: 'PostProduct',
          component: PostProduct
      },


    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
    mode:'history'
})
