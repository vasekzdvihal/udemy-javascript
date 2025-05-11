<script setup>
import TheNavigation from './components/TheNavigation.vue';
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div>
    <TheNavigation></TheNavigation>

    <div class="container">
      <!--:key is from Vue.js - is used for re-render component. We change route so this will destroy and render again whole page. -->
      <router-view :key="route.path"></router-view>
    </div>
  </div>
</template>
