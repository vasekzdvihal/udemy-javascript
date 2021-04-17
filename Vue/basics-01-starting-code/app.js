const app = Vue.createApp({
  data: function() {
    return {
      courseGoalA: 'Finish the course and leard Vue!',
      courseGoalB: '<h1>Master Vue and build amayzing apps!</h1>',
      vueLink: 'https://vuejs.org'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if(randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal');



