<template>
  <div>
    <h2>{{ fullName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: "UserData",
  props: ['firstName', 'lastName', 'age'],
  setup(props, context) {
    const uName = computed(function() {
      return props.firstName + ' ' + props.lastName;
    });

    console.log(context);

    // context.emit('save-data', 1); // this.$emit('save-data', 1);

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