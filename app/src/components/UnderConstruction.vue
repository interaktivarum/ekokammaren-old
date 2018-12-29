<template>
  <div class="component">
    <div class="component-content center-col">

      <div>
        <p>
          <strong>
            Ekokammaren är för tillfället under ombyggnad.
          </strong>
        </p>
        <p>
          Planerad återlansering vintern 2018/19.
        </p>
        <p>
          Under tiden: <router-link :to="{ name: 'Create', params: {} }">Skapa en egen jämförelse</router-link>.
        </p>
        <hr />
        <p class="text-gray">
          <a href="http://v1.ekokammaren.se" target="_blank">Besök gamla Ekokammaren</a> - med förbehåll för tekniska problem.
        </p>
      </div>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';

export default {
  components:{
  },
  name: 'UnderConstruction',
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

</style>
