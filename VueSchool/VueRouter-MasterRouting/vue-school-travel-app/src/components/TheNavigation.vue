<script setup>
import sourceData from '../../data.json';
import { ref } from 'vue';

const destinations = ref(sourceData.destinations);
</script>

<template>
    <div id="nav">
      <AppLink to="/">
        <h4>Vue School Travel App</h4>
      </AppLink>
      <AppLink
          v-for="destination in destinations"
          :key="destination.id"
          :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug }}"
      >
        {{ destination.name }}
      </AppLink>
      <AppLink :to="{ name: 'protected' }">Dashboard</AppLink>
    </div>
</template>