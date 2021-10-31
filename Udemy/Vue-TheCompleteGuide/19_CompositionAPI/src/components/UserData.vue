<template>
  <div>
    <h2>{{ fullName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import { computed, inject, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

export default {
  name: "UserData",
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const uName = computed(function() {
      return props.firstName + ' ' + props.lastName;
    });

    console.log(context);

    const age = inject('userAge');

    // context.emit('save-data', 1); // this.$emit('save-data', 1);

    // Lifecycle hooks
    onBeforeMount(function() {
      console.log('onBeforeMount')
    });
    onMounted(function() {
      console.log('onMounted')
    });
    onBeforeUpdate(function() {
      console.log('onBeforeUpdate')
    });
    onUpdated(function() {
      console.log('onUpdated')
    });
    onBeforeUnmount(function() {
      console.log('onBeforeUnmount')
    });
    onUnmounted(function() {
      console.log('onUnmounted')
    });


    return {
      fullName: uName,
      age }
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