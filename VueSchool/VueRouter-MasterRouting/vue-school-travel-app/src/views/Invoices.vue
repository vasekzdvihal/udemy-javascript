<script setup>
import { computed } from "vue";
const username = computed(() => window.user);
</script>

<template>
  <div>
    <h1>Invoices for {{ username }}</h1>
  </div>
</template>
