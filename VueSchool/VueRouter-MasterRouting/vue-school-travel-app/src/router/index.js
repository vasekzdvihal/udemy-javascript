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
    path: '/home',
    redirect: '/',
    // redirect: to => '/'
  },
  {
    path: '/protected',
    name: 'protected',
    components: {
      default: () => import('@/views/Protected.vue'),
      LeftSidebar: () => import('@/components/LeftSidebar.vue'),
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/invoices',
    name: 'invoices',
    components: {
      default: () => import('@/views/Invoices.vue'),
      LeftSidebar: () => import('@/components/LeftSidebar.vue'),
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/example/:id(\\d+)',
    // "id(\\d+)+" - repeating group, but it's required -> example/1/2/3/4/5
    // "id(\\d+)*" - repeating group, but it's not required -> example/1/2/3/4/5 but also -> example/
    // "id(\\d+)?" - optional -> example/1 but also -> example/
    component: () => import('@/views/Login.vue'),
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

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !window.user) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
});

export default router;