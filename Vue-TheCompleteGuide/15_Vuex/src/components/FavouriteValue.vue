<template>
  <h3>{{ counter }}</h3>
  <p>We do more...</p>
</template>

<script>
export default {
  name: "FavouriteValue",
  computed: {
    counter() {
      return this.$store.getters.normalizeCounter;
    }
  }
}
</script>

<style scoped>

</style>