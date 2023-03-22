import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Manage from '../components/Manage.vue'
import Record_modify from '../components/Record/Record_modify.vue'
import Record_add from '../components/Record/Record_add.vue'
import Image_add from '../components/Image/Image_add.vue'
import Image_show from '../components/Image/Image_show.vue'

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
      { path: '/record_modify', component: Record_modify },
      { path: '/record_add', component: Record_add },
      { path: '/image_add', component: Image_add },
      { path: '/image_show', component: Image_show },
    ],
  },

]

const router = new VueRouter({
  routes
})

export default router
