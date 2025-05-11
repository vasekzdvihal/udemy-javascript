<script setup>
import sourceData from '../../data.json';
import {computed} from "vue";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  experienceSlug: {
    type: String,
    required: true,
  }
})

const destination = computed(() => sourceData.destinations.find(d => d.id === props.id));
const experience = computed(() => destination.value.experiences.find(e => e.slug === props.experienceSlug));
</script>

<template>
  <section>
    <h2>{{ experience.name }}</h2>
    <img :src="`/images/${experience.image}`" :alt="experience.name">
    <p>{{ experience.description }}</p>
  </section>
</template>