<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '0123 45678 991',
          email: 'manual@localhost.com'
        },
        {
          id: 'julia',
          name: 'Julia Jones',
          phone: '0123 454334 2321',
          email: 'julia@localhost.com'
        }
      ]
    };
  }
};
</script>