import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
    props: route => ({ id: parseInt(route.params.id) }),
    // props: true, // Can be true or objects. Can be use with expression even (newsletterPopup => someExpression ? true : false)
    children: [
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: () => import('@/components/ExperienceShow.vue'),
        props: route => ({ ...route.params, id: parseInt(route.params.id) })
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(), // createWebHistory is HTML5 history, createWebHashHistory have after root # and is slower
  routes: routes,
  linkActiveClass: 'vue-school-active-link' // <router-link> class for active class
});

export default router;