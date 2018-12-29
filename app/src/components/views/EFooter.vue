<template>
  <div class="component">
    <div class="component-content">

      Ekokammaren är en del av <a href="https://www.mikoteket.se" target="_blank" class="contrast">Mikoteket</a> skapad av <a href="http://www.interaktivarum.se" target="_blank" class="contrast">Interaktiva rum</a>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';

export default {
  name: 'EFooter',
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
  color: rgb(50,50,50);
  padding: 50px;
  text-align: center;
}

</style>
