import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Events from '../views/Events.vue'
import EventsDetails from '../views/EventsDetails.vue'
import Blogs from '../views/Blogs.vue'
import BlogsDetails from '../views/BlogsDetails.vue'
import Members from '../views/Members.vue'
import JoinUs from '../views/JoinUs.vue'

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
    path: '/events/:id',
    name: 'EventsDetails',
    component: EventsDetails,
    props: true
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
    path: '/join_us',
    name: 'JoinUs',
    component: JoinUs
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
