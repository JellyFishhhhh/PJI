import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Manage from '../components/Manage.vue'
import Record_modify from '../components/Record/Record_modify.vue'


Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/login'},
  {path: '/login', component: Login},
  {
    path: '/home',
    component: Home,
    redirect: '/manage',
    children: [
      { path: '/manage', component: Manage },
      { path: '/record_modify', component: Record_modify }
    ],
  },

]

const router = new VueRouter({
  routes
})

export default router
