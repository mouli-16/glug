import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Events from '../views/Events.vue'
import Blogs from '../views/Blogs.vue'
import BlogsDetails from '../views/BlogsDetails.vue'
import Members from '../views/Members.vue'
import Youtube from '../views/Youtube.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/blogs/:id',
    name: 'BlogsDetails',
    component: BlogsDetails,
    props: true
  },
  {
    path: '/members',
    name: 'Members',
    component: Members
  },
  {
    path: '/youtube',
    name: 'Youtube',
    component: Youtube
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
