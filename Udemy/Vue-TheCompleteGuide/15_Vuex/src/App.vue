<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter/>
    <favourite-value/>
    <button @click="addOne">Add 9</button>
    <change-counter/>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from "./components/TheCounter";
import ChangeCounter from "./components/ChangeCounter";
import FavouriteValue from "./components/FavouriteValue";
import UserAuth from "./components/UserAuth";

export default {
  components: {
    BaseContainer, TheCounter, ChangeCounter, FavouriteValue, UserAuth
  },
  methods: {
    addOne() {
      // this.$store.dispatch('increase', { value: 9})
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 9
      });
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>