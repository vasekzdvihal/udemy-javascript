<template>
  <user-alert v-if="alertIsVisible" title="Add a User?" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<script>
import alertMixin from '../mixins/alert'
import UserAlert from './UserAlert';

export default {
  mixins: [alertMixin],
  components: { // can't share components
    UserAlert,
  },
};
</script>