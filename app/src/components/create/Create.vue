<template>
  <div class="component">
    <div class="component-content center-col">

      <h1>Skapa jämförelse</h1>

      <p>
        Använd Ekokammaren för att skapa en egen jämförelse och presentera olika perspektiv sida vid sida.
      </p>

      <router-link :to="{ name: 'CreateEdit', params: {} }">Skapa jämförelse</router-link>
      <br />
      <router-link :to="{ name: 'CreateExample', params: {} }">Se exempeljämförelse</router-link>

      </ol>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';

export default {
  components:{
  },
  name: 'Create',
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.column{
  background: rgb(245,245,245);
  border: 2px solid lightgray;
  border-left: 6px solid gray;
  padding: 10px;
  margin: 5px 0px 5px 0px;
}

.bg-gray{
  background: rgb(240,240,240);
  border: 1px solid lightgray;
  padding: 10px;
}

.swatches{
  filter: saturate(1);
  /*transition: all 0.25s;*/
}

.column:hover .swatches{
  /*filter: saturate(1);*/
}

</style>
