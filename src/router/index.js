import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact'),
  },
  {
    path: '/details/:id',
    component: () => import('../views/Details'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
