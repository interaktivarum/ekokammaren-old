<template>
  <div class="embedInstagram" :style="{width: width}">

    <blockquote class="instagram-media" data-instgrm :data-instgrm-permalink="content.href" data-instgrm-version="9" style="width: 100%">
      <a :href="content.href">Instagram</a>
    </blockquote>

  </div>
</template>

<script>

import { store } from '@/store';

export default {
  name: 'EmbedInstagram',
  props:{
    content: "",
    width: ""
  },
  data () {
    return {
    }
  },
  mounted: function () {

    if(window.instgrm){
      window.instgrm.Embeds.process();
    }

    /*if(this.content.reloadAPI){
      window.instgrm.Embeds.process();
    }
    else{
      //store.commit('loadInstagramAPI');
    }*/

  },
  computed:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.instagram-media{
  margin: 0;
  padding: 0;
}

.hide{
  display: none;
}

</style>
