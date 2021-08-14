<template>
  <base-container title="Vuex">
    <the-counter/>
    <favourite-value/>
    <button @click="addOne">Add 9</button>
    <change-counter/>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from "./components/TheCounter";
import ChangeCounter from "./components/ChangeCounter";
import FavouriteValue from "./components/FavouriteValue";

export default {
  components: {
    BaseContainer, TheCounter, ChangeCounter, FavouriteValue
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 9})
      this.$store.commit({
        type: 'increase',
        value: 9
      });
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