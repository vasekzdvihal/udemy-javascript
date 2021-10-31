<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName" ></user-data>
    <button @click="increaseAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" >
      <input type="text" placeholder="Last Name" ref="lastNameInput" >
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData';

export default {
  components: {
    UserData,
  },
  setup() {
    const _age = ref(25);
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);

    provide('userAge', _age);

    const fullName = computed(function () {
      return `${firstName.value} ${lastName.value}`;
    });

    watch([_age, fullName], function(newValues, oldValues) {
      console.log('Old age: ' + oldValues[0]);
      console.log('New age: ' + newValues[0]);
      console.log('Old name: ' + oldValues[1]);
      console.log('New name: ' + newValues[1]);
    });

    function setNewData() {
      _age.value++;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    return {
      age: _age,
      fullName,
      firstName,
      lastName,
      lastNameInput,
      setLastName,
      increaseAge: setNewData,
    };
  },
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