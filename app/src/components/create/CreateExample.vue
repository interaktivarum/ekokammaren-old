<template>
  <div class="landing">
    <social-theme v-if="theme" :content="theme"></social-theme>

    <div class="center-col">
      <router-link :to="{ name: 'Create', params: {} }">
        Skapa en egen jämförelse
      </router-link>
    </div>

  </div>
</template>

<script>

import SocialTheme from '@/components/SocialTheme';
import { store } from '@/store';
import jsonContent from '@/assets/content.json';

export default {
  components:{
    SocialTheme
  },
  name: 'Example',
  data () {
    return {
      content: jsonContent
    }
  },
  computed: {
    idTheme: function (){
      return store.state.idSelectedTheme;
    },
    theme: function () {
      return store.state.content;
    }
  },
  mounted () {
    var idTheme = this.$route.params.id ? this.$route.params.id : 0;
    store.commit('setSelectedThemeId',idTheme);
    store.commit('setContent',this.content.themes[idTheme]);

    //Load social APIs
    store.commit('loadFacebookAPI');
    store.commit('loadInstagramAPI');
    store.commit('loadTwitterAPI');
  },
  firebase: {
    //workshops: db.ref('workshops')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.landing{

}

</style>
