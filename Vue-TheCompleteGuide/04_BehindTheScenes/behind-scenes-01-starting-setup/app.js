const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue-TheCompleteGuide is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
     /* this.message = this.currentUserInput;*/
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log("beforeCreate()")
  },
  created() {
    console.log("created()")
  },
  beforeMount() {
    console.log("beforeMount()")
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log("beforeUpdate()")
  },
  updated() {
    console.log("updated()")
  },
  beforeUnmount() {
    console.log("beforeUnmount()")
  },
  unmounted() {
    console.log("unmounted()");
  }
});

app.mount('#app');

setTimeout(function() {
  app.unmount();
}, 3000);


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
