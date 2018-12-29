<template>
  <div class="component">
    <div class="component-content">

      <router-link to="/">
        <h2 class="header">
          Ekokammaren
        </h2>
      </router-link>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';

export default {
  name: 'EHeader',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.component{
}

.component-content{
  background: lightgray;
  padding: 10px 0px 10px 20px;
}

.header{
  color: rgb(100,100,100);
  cursor: pointer;
  letter-spacing: 0.02em;
}

.header:hover{
  text-decoration: underline;
}

</style>
