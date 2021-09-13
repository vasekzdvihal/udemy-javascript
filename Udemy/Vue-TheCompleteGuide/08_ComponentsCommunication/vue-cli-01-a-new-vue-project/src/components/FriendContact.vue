<template>
  <li>
    <h2>{{ name }} <span class="favorite" v-if="isFavorite">favorite</span></h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">Toggle favorite</button>
    <button @click="$emit('delete', id)">Delete</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
  export default {
    // props: [
    //   'name', 'phoneNumber', 'emailAddress', 'isFavorite'
    // ],
    props : {
      id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      phoneNumber: String,
      emailAddress: String,
      isFavorite: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    emits: [
      'toggle-favorite', 'delete'
    ],
    // emits: {
    //   'toggle-favorite' : function(id) {
    //     if(id) {
    //       return true;
    //     } else {
    //       console.warn('id is missing');
    //       return false;
    //     }
    //   },
    //   'delete' : function(id) {}
    // },
    data() {
      return {
        detailsAreVisible : false,
      }
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
        this.$emit('toggle-favorite', this.id);
      }
    }
  };
</script>

<style>
  .favorite {
    background: #00a876;
    border: #1b995e 2px solid;
    border-radius: 35px;
    margin: -18px 0px 46px 5px;
    padding: 2px 25px;
    font-size: 12px;
    vertical-align: middle;
  }
</style>