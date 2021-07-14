import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    },
  },

  {
    path: '/articles/Les-soft-skills-by-Tilt',
    name: 'articles/Les-soft-skills-by-Tilt',
    components: {
      default: () => import(/* webpackChunkName: "articles/Les-soft-skills-by-Tilt" */ '../views/articles/Les-soft-skills-by-Tilt.vue'),
    },
  },

  {
    path: '/articles/Les-5-soft-skills-les-plus-importants',
    name: 'articles/Les-5-soft-skills-les-plus-importants',
    components: {
      default: () => import(/* webpackChunkName: "articles/Les-5-soft-skills-les-plus-importants" */ '../views/articles/Les-5-soft-skills-les-plus-importants.vue'),
    },
  },

  {
    path: '/articles/Soft-Skills-vs-Hard-Skills',
    name: 'articles/Soft-Skills-vs-Hard-Skills',
    components: {
      default: () => import(/* webpackChunkName: "articles/Soft-Skills-vs-Hard-Skills" */ '../views/articles/Soft-Skills-vs-Hard-Skills.vue'),
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router

