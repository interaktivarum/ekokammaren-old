<template>
  <div class="embedTwitter">
    <!--blockquote class="twitter-tweet" data-lang="sv"><p lang="sv" dir="ltr">Sju av tio studenter bor i rödlistade städer <a href="https://twitter.com/hashtag/svtnyheter?src=hash&amp;ref_src=twsrc%5Etfw">#svtnyheter</a> <a href="https://t.co/BKsLENz2WY">https://t.co/BKsLENz2WY</a></p>&mdash; SVT Nyheter (@svtnyheter) <a href="https://twitter.com/svtnyheter/status/1032177994343821312?ref_src=twsrc%5Etfw">22 augusti 2018</a></blockquote-->

    <blockquote class="twitter-tweet" data-lang="sv" style="'margin-bottom': '0px'">
      <a :href="content.href">Twitter</a>
    </blockquote>

  </div>
</template>

<script>

import { store } from '@/store';

export default {
  name: 'EmbedTwitter',
  props:{
    content: "",
    width: ""
  },
  data () {
    return {
    }
  },
  mounted: function () {

    store.commit('reloadTwitterAPI');

    /*if(this.content.reloadAPI){
      store.commit('reloadTwitterAPI');
    }
    else{
      //store.commit('loadTwitterAPI');
    }*/

  },
  computed:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.embedTwitter{
}

.twitter-tweet {
  margin-bottom: 0px !important;
}

</style>
