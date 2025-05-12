<script setup>
import { computed } from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const username = computed(() => window.user);

function logout() {
  window.user = null;
  router.push('/');
}
</script>

<template>
  <div>
    <h1>Greetings, {{ username }}</h1>
    <router-link :to="{ name: 'invoices' }">Invoices</router-link>
    <button @click="logout">Logout</button>
  </div>
</template>
