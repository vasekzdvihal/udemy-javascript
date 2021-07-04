<template>
  <the-header title="Remember ME!"></the-header>
  <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources';
import TheHeader from "./components/layout/TheHeader";

export default {
  components: {
    StoredResources, TheHeader
  },
  data() {
    return {
      storedResources : [
        { id: 'official-guide', title: 'Official Guide', description: 'This is short description', link: 'https://vuejs.org' },
        { id: 'google', title: 'Google', description: 'Google', link: 'https://google.com' }
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>