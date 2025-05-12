<script setup>
import { RouterLink } from 'vue-router';
import {computed} from "vue";

const props = defineProps({
  ...RouterLink.props,
  to: {
    type: String,
    required: true
  }
})

const isExternal = computed(() => {
  return typeof props.to === "string" && props.to.startsWith("http");
});
</script>

<template>
  <div class="app-link">
    <a v-if="isExternal" :href="to"><slot /></a>
    <router-link v-else v-bind="props"><slot></slot></router-link>
  </div>
</template>
