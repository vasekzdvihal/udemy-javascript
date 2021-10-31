<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
  <section class="container">
    <h2>{{ secondUser.name }}</h2>
    <h3>{{ secondUser.age }}</h3>
  </section>
</template>

<script>
import { ref } from 'vue';
import { reactive } from 'vue';

export default {
  setup() {
    // const uName = ref('Vašek'); // ref create reactive value
    // const uAge = ref(25);

    const userRefObject = ref({
      name: 'Vašek',
      age: 25,
    });

    const userReactiveObject = reactive({
      name: 'Vašek',
      age: 25,
    });

    setTimeout(function () {
      userRefObject.value.name = 'Váša';
      userRefObject.value.age = 30;
      userReactiveObject.name = 'Váša';
      userReactiveObject.age = 30;
    }, 2000);

    return {
      user: userRefObject,
      secondUser: userReactiveObject,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>