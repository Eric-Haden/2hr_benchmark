<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div v-for="item in mapboxItems" :key="item.id">
        {{ item.category }} - {{ item.plantingSite }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: false,
      error: null,
      mapboxItems: [],
    };
  },
  mounted() {
    this.fetchMapboxItems();
  },
  methods: {
    async fetchMapboxItems() {
      this.loading = true;
      try {
        const response = await axios.get('http://127.0.0.1:3000');
        this.mapboxItems = response.data;
      } catch (error) {
        this.error = error.message || 'Failed to fetch Mapbox items.';
      }
      this.loading = false;
    },
  },
};
</script>
