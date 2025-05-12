<script setup>
import sourceData from '../../data.json';
import { ref } from 'vue';
import {isNavigationFailure, NavigationFailureType, useRouter} from "vue-router";

const router = useRouter();
const destinations = ref(sourceData.destinations);

async function triggerRouterError() {
  const navigationFailure = await router.push('/');
  if (isNavigationFailure(navigationFailure, NavigationFailureType.duplicated)) {
    console.log(navigationFailure);
    // false was returned inside a navigation guard to the navigation.
    // navigationFailure have to and from with all properties
  } else {
    // all is well
  }
}

function addDynamicRoute() {
  router.addRoute({
    name: 'dynamic',
    path: '/dynamic',
    component: () => import('@/views/Login.vue')
  });

  // Routes can be removed as well
  // router.removeRoute('dynamic');
  // or via callback, or it can be just rewritten
  // router.replaceRoute('dynamic');
}
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="triggerRouterError">Navigation Failure</button>
    <button @click="addDynamicRoute">Add Dynamic Route</button>
    <router-link to="/dynamic">Visit Dynamic Route</router-link>
    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug }}"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name">
      </router-link>
    </div>
  </div>
</template>

