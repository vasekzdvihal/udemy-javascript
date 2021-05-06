<template>
  <li>
    <h2>{{ name }} <span class="favorite" v-if="friendIsFavorite === '1'">favorite</span></h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">Toggle favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
  export default {
    props: [
      'name', 'phoneNumber', 'emailAddress', 'isFavorite'
    ],
    data() {
      return {
        detailsAreVisible : false,
        friend : {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '0123 45678 991',
          email: 'manual@localhost.com'
        },
        friendIsFavorite: this.isFavorite,
      }
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
        if(this.friendIsFavorite === '0') {
          this.friendIsFavorite = '1'
        } else {
          this.friendIsFavorite = '0'
        }
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