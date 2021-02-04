import Vue from 'vue'
import VueRouter from 'vue-router'
import UsersRoutes from '@/components/users/routes'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    },
  },
  // spread/apply
  ...UsersRoutes,

  {
    path: '/inscription',
    name: 'Inscription',
    components: {
      default: () => import(/* webpackChunkName: "inscription" */ '../views/Inscription.vue'),
    },
  },

  {
    path : '/connexion',
    name : 'Connexion',
    components: {
      default: () => import(/* webpackChunkName: "connexion" */ '../views/Connexion.vue'),
    },
  },

  {
    path : '/jeu',
    name : 'jeu',
    components: {
      default: () => import(/* webpackChunkName: "Game" */ '../views/Jeu.vue'),
    },
  },

  {
    path : '/contact',
    name : 'Contact',
    components: {
      default: () => import(/* webpackChunkName: "connexion" */ '../views/Contact.vue'),
    },
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router

