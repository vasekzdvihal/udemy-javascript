<template>
  <h3>{{ counted }}</h3>
</template>

<script>
export default {
  name: "TheCounter",
  computed: {
    counted() {
      return this.$store.getters.finalCounter;
    },
  },
}
</script>

<style scoped>

</style>