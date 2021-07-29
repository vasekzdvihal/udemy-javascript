<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return { changesSaved: false };
  },
  methods: {
    confirmInput() {
      // do something
      this.$router.push('/teams');
      // this.$router.back(); // and more methods...
    },
    saveChanges() {
      this.changesSaved = true;
      console.log(this.changesSaved);
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('UsersList components beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('usersList component beforeRouteLeave');
    console.log(to, from);

    if(this.changesSaved) {
      next();
    } else {
       const userWantsToLeave = confirm('Are you sure? You got unsaved changes!');
       next(userWantsToLeave);
    }
  },
  unmounted() {
    console.log('unmounted');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>