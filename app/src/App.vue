<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import { store } from '@/store';

export default {
  components:{
  },
  name: 'App',
}

</script>

<style>

html{
  margin: 0;
  padding: 0;
}

body{
  margin: 0;
  padding: 0;
}

h1, h2, h3{
  margin: 0.75em 0 0.75em 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
