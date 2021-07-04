<template>
  <ul v-for="storedResources"></ul>
</template>

<script>
export default {
  data() {
    return {
      storedResources : [
        { id: 'official-guide', title: 'Official Guide', description: 'This is short description', link: 'https://vuejs.org' }
        { id: 'google', title: 'Google', description: 'Google', link: 'https://google.com' }
      ]
    }
  }
}
</script>