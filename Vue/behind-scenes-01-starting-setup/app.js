const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal : "Pizza!"
    }
  }
});

app2.mount("#app2");

// ....

/*let message = "Hello";
let longMessage = message + " world";
console.log(longMessage);

message = "Hello??";
console.log(longMessage);*/

// .....

/*
const data = {
  message: "Prd stary baby",
  longMessage: ""
};

const handler = {
  set(target, key, value) {
    if(key === 'message') {
      proxy.longMessage = value + " world!!!";
    }
    target.message = value;
  }
}

const proxy = new Proxy(data, handler);
proxy.message = "Hello!!!";
console.log(proxy.longMessage);
console.log(proxy.message);*/
