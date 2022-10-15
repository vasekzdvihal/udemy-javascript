# Vue - The Complete Guide

## Supported prop values 

In general, you can learn all about prop validation in the official 
docs: https://v3.vuejs.org/guide/component-props.html

Specifically, the following value types (type property) are supported:

- String
- Number
- Boolean
- Array
- Object
- Date
- Function
- Symbol

But type can also be any constructor function (built-in ones like Date or custm ones).

## Vue Instance Lifecycle

![img.png](img.png)

    <script>
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
    </script>
