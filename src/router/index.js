import Vue from 'vue'
import Router from 'vue-router'
import Game from '../components/Game'
import Login from '../components/Login'
import Register from '../components/Register'
import store from '../store'
import Profile from '../components/Profile'
import Help from '../components/Help'
import PasswordForgot from '../components/PasswordForgot'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/game',
      name: 'Game',
      component: Game,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/help',
      name: 'Help',
      component: Help,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/pwForgotten',
      name: 'pwForgotten',
      component: PasswordForgot
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '*',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['firebase/isLoggedIn']) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
