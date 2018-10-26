<template>
  <div class="EmbedWebsite">
    
    <og-embed :url="content.href" :width="width"></og-embed>

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
  data () {
    return {
    }
  },
  mounted: function () {
  },
  computed:{
    src: function () {
      return "https://www.youtube.com/embed/" + this.content.id;
    },
    height: function () {
      return 315/560 * this.width;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.embedTest{
  background: lightgray;
}

</style>
