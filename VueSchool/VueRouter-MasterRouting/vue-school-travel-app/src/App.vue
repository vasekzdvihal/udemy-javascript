<script setup>
import TheNavigation from './components/TheNavigation.vue';
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div>
    <TheNavigation></TheNavigation>

    <div class="container">
      <router-view v-slot="{Component}" class="view left-sidebar" name="LeftSidebar">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>

      <!--:key is from Vue.js - is used for re-render component. We change route so this will destroy and render again whole page. -->
      <router-view v-slot="{Component}" class="main-view">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.container {
  display: flex;
}
.left-sidebar {
  width: 20%;
}
.main-view {
  width: 100%;
}
</style>