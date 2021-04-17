const app = Vue.createApp({
    data() {
        return {
            boxSelectedA: false,
            boxSelectedB: false,
            boxSelectedC: false,
            boxSelectedD: false
        }
    },
    computed: {
      boxBClasses() {
          return { active: this.boxSelectedB };
      }
    },
    methods: {
        boxSelected(box) {
            if(box === 'A') this.boxSelectedA = !this.boxSelectedA;
            if(box === 'B') this.boxSelectedB = !this.boxSelectedB;
            if(box === 'C') this.boxSelectedC = !this.boxSelectedC;
            if(box === 'D') this.boxSelectedD = !this.boxSelectedD;
        }
    }
});

app.mount('#styling');