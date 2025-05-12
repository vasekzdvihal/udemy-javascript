import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import sourceData from '../../data.json';

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
    beforeEnter(to, from) {
      const exists = sourceData.destinations.find(des => des.id === parseInt(to.params.id));

      if (!exists) {
        return { name: 'NotFound' }
      }
    },
    children: [
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: () => import('@/components/ExperienceShow.vue'),
        props: route => ({ ...route.params, id: parseInt(route.params.id) })
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(), // createWebHistory is HTML5 history, createWebHashHistory have after root # and is slower
  routes: routes,
  linkActiveClass: 'vue-school-active-link', // <router-link> class for active class
  scrollBehavior (to, from, savePosition) {
    return savePosition || new Promise((resolve) => {
      setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300);
    });
  }
});

export default router;