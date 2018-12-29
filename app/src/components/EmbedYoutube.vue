<template>
  <div class="embedYoutube">

    <iframe :width="width" :height="height" :src="this.src" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

  </div>
</template>

<script>
export default {
  name: 'EmbedYoutube',
  props:{
    content: "",
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
      return "https://www.youtube.com/embed/" + this.content.query.v;
    },
    height: function () {
      return 315/560 * this.width;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
