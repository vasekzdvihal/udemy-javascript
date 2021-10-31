<template>
  <h2>{{ fullName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import { computed } from 'vue';

export default {
  name: "UserData",
  props: ['firstName', 'lastName', 'age'],
  setup(props) {
    const uName = computed(function() {
      return props.firstName + ' ' + props.lastName;
    });

    return { fullName: uName, }
  },
  // computed: {
  //   fullName() {
  //     return this.firstName + ' ' + this.lastName;
  //   }
  // },
}
</script>

<style scoped>

</style>