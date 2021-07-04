<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources';
import AddResource from './AddResource';

export default {
  components: {
    StoredResources, AddResource
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources : [
        { id: 'official-guide', title: 'Official Guide', description: 'This is short description', link: 'https://vuejs.org' },
        { id: 'google', title: 'Google', description: 'Google', link: 'https://google.com' }
      ]
    };
  },
  provide() {
    return {
      resources: this.storedResources
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    }
  }
}
</script>

<style scoped>

</style>