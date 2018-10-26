<template>
  <div class="embedFacebook">

    <div class="fb-post" :data-href="content.href" :data-width="width" data-show-text="true">
      <blockquote :cite="content.href" class="fb-xfbml-parse-ignore">
        <a :href="content.href">Facebook</a>
      </blockquote>
    </div>

  </div>
</template>

<script>

import { store } from '@/store';

export default {
  name: 'EmbedFacebook',
  props:{
    content: "",
    width: ""
  },
  data () {
    return {
    }
  },
  mounted: function () {

    if(this.content.reloadAPI){
      store.commit('reloadFacebookElement',this.$el);
    }
    else{
      //store.commit('loadFacebookAPI');
    }

  },
  computed:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.embedFacebook{
}

</style>
