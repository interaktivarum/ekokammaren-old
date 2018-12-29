<template>
  <div class="EmbedWebsite">

    <og-embed :url="content.href" :width="width" v-if="valid"></og-embed>

  </div>
</template>

<script>

import OgEmbed from './OgEmbed';

export default {
  name: 'EmbedWebsite',
  components: {
    OgEmbed
  },
  props:{
    content: "",
    href: "",
    width: ""
  },
  computed: {
    valid: function (){
      return true;
    }
  },
  data () {
    return {
    }
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.embedTest{
  background: lightgray;
}

</style>
