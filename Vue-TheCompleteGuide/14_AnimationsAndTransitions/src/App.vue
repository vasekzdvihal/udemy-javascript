<template>
  <div class="container">
    <div class="block" :class="{animate: animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition name="para" @before-enter="beforeEnter" @before-leave="beforeLeave" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave">
      <p v-if="paraIsVisible">This is somethisdfa</p>
    </transition>
    <button @click="togglePara">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersAreVisible: false,
    };
  },
  methods: {
    animateBlock() {
      this.animatedBlock = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    togglePara() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    beforeEnter(el) {
      console.log('before enter');
      console.log(el);
    },
    beforeLeave(el) {
      console.log('before leave');
      console.log(el); // Tohle je element kterej je animovanej. Muze to pouzit treba ke zmenam stylu atp...
    },
    enter(el) {
      console.log('enter');
      console.log(el);
    },
    afterEnter(el) {
      console.log('after enter');
      console.log(el);
    },
    leave(el) {
      console.log('leave');
      console.log(el);
    },
    afterLeave(el) {
      console.log('after leave');
      console.log(el);
    }
  },
};
</script>

<style>
.para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.para-enter-active {
  transition: all 0.3s ease-out;
  /*animation: slide-scale 0.3s ease-out;*/
}

.para-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.para-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

.para-leave-active {
  transition: all 0.3s ease-in;
}

.para-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.animate {
  animation: slide-fade 0.3s ease-out forwards;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

@keyframes slide-fade {
    0% {
      transform: translateX(0) scale(1);
    }

    70% {
      transform: translateX(-120px) scale(1,1);
    }

    100% {
      transform: translateX(-150px) scale(1);
    }
}

* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
</style>