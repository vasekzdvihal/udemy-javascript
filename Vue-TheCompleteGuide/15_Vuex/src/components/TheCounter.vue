<template>
  <h3>{{ counted }}</h3>
</template>

<script>
export default {
  name: "TheCounter",
  computed: {
    counted() {
      return this.$store.state.counter;
    },
  },
}
</script>

<style scoped>

</style>