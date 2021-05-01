var vue = new Vue({
  el: '#events',
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      /*fullname: ''*/
    };
  },
  watch: {
      counter(value) {
        if(value > 50) this.counter = 0;
      }
/*    name(value) {
      if(value === '') this.fullname = '';
      this.fullname = value + ' ' + this.lastName;
    },
    lastName(value) {
      if(value === '') this.fullname = '';
      this.fullname = this.name + ' ' + value;
    }*/
  },
  computed : {
    fullname: function() {
      if(this.name === '') return '';
      return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;

    }
  }
});
