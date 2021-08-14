import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
   state() {
       return {
           counter: 0,
       };
   },
    mutations: {
       increment(state) {
           state.counter++;
       },
       increase(state, payload) {
           state.counter = state.counter + payload.value;
       }
    },
    actions: {
      increment(context) {
          setTimeout(function() {
              context.commit('increment');
          }, 2000);
      },
      increase(context, payload) {
          console.log(context);
          context.commit('increase', payload)
      }
    },
    getters: {
       finalCounter(state) {
           return state.counter * 3;
       },
       normalizeCounter(_, getters) { // pouziva se kdyz to prvni nepouzivam ale potrebuji to abych se dostal ke druhymu
           if(getters.finalCounter < 0) {
               return 0;
           }
           if(getters.finalCounter > 100) {
               return 100;
           }
           return getters.finalCounter;
       }
    }
});
const app = createApp(App);

app.use(store);
app.mount('#app');
