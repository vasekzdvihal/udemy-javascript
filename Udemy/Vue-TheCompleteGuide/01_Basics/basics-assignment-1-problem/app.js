const app = Vue.createApp({
  data: function() {
    return {
      name: "Vašek",
      age: 29,
      pingUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/2007_Snow-Hill-Island_Luyten-De-Hauwere-Adelie-Penguin-16.jpg'
    };
  },
  methods: {
    getRandomNumber() {
      return Math.random();
    }
  }
});

app.mount("#assignment");