const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    submitForm() {
      alert("Submitted!");
    },
    setName(event) {
      this.name = event.target.value;  
    },
    add(number) {
      this.counter = this.counter + number;
    },
    reduce(number) {
      this.counter = this.counter - number;
    }
  }
});

app.mount('#events');
