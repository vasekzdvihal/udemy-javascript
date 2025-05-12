<script setup>
import { useRoute } from 'vue-router';
import {computed, ref} from 'vue';
import sourceData from '../../data.json';
import ExperienceCard from "@/components/ExperienceCard.vue";
import GoBack from "@/components/GoBack.vue";

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const route = useRoute();
const destination = computed(() => sourceData.destinations.find(des => des.id === props.id));

// https://travel-dummy-api.netlify.app/brazil.json
// Since Vue.js doesn't render component every time, we have a problem when navigation.
// One, terrible solution is created to watch for route and watch id and then call "initData" function again
</script>

<template>
  <div>
    <section v-if="destination" class="destination">
      <h1>{{ destination.name }}</h1>
      <GoBack />
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name">
        <p>{{ destination.description }}</p>
      </div>
    </section>

    <section class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <router-link
            v-for="ex in destination.experiences"
            :key="ex.id"
            :to="{ name: 'experience.show', params: { id: destination.id, experienceSlug: ex.slug }}"
        >
          <ExperienceCard  :experience="ex" />
        </router-link>
      </div>


      <router-view></router-view>
    </section>
  </div>
</template>