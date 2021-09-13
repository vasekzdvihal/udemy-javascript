<template>
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>


<!--  <div class="container">-->
<!--    <users-list></users-list>-->
<!--  </div>-->
<!--  <div class="container">-->
<!--    <div class="block" :class="{animate: animatedBlock}"></div>-->
<!--    <button @click="animateBlock">Animate</button>-->
<!--  </div>-->
<!--  <div class="container">-->
<!--    <transition :css="false"-->
<!--                @before-enter="beforeEnter"-->
<!--                @before-leave="beforeLeave"-->
<!--                @enter="enter"-->
<!--                @after-enter="afterEnter"-->
<!--                @leave="leave"-->
<!--                @after-leave="afterLeave"-->
<!--                @enter-cancelled="enterCanceled"-->
<!--                @leave-cancelled="leaveCanceled">-->
<!--      <p v-if="paraIsVisible">This is somethisdfa</p>-->
<!--    </transition>-->
<!--    <button @click="togglePara">Toggle Paragraph</button>-->
<!--  </div>-->
<!--  <div class="container">-->
<!--    <transition name="fade-button" mode="out-in">-->
<!--      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>-->
<!--      <button @click="hideUsers" v-else>Hide Users</button>-->
<!--    </transition>-->
<!--  </div>-->
<!--    <base-modal @close="hideDialog" :open="dialogIsVisible">-->
<!--      <p>This is a test dialog!</p>-->
<!--      <button @click="hideDialog">Close it!</button>-->
<!--    </base-modal>-->
<!--  <div class="container">-->
<!--    <button @click="showDialog">Show Dialog</button>-->
<!--  </div>-->
</template>  

<script>
// import UsersList from "./components/UsersList";

export default {
  // components: {
  //   UsersList,
  // },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
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
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter');
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if(round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter() {
      console.log('after enter');
    },
    beforeLeave(el) {
      console.log('before leave');
      console.log(el); // Tohle je element kterej je animovanej. Muze to pouzit treba ke zmenam stylu atp...
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave');
      let round = 1;
      this.leainterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if(round > 100) {
          clearInterval(this.leainterval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('after leave');
      console.log(el);
    },
    enterCanceled() {
      console.log('enter canceled');
      clearInterval(this.enterInterval);
    },
    leaveCanceled() {
      console.log('leave canceled');
      clearInterval(this.leaveInterval);
    },
  },
};
</script>

<style>
.route-enter-from {}
.route-enter-active {
  animation: slide-fade 0.4s ease-out;
}
.route-enter-to {}
.route-leave-active {
  animation: slide-fade 0.4s ease-in;
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