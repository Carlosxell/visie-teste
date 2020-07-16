<template>
  <div class="l-page--home">
  </div>
</template>

<script>
  // import SearchForm from '../components/SearchForm';

  export default {
    name: 'Home',
    components: {},
    data: () => {
      return {
        weather: null,
      };
    },
    methods: {
      getError(val) { this.weather = null; },
      getWeather(val) { this.weather = { ...val }; },
    },
  };
</script>
