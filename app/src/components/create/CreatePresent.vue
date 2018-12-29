<template>
  <div class="component">
    <div class="component-content">

      <div class="center-col">
        <router-link :to="{ name: 'CreateEdit', params: {} }">
          Redigera jämförelse
        </router-link>
      </div>

      <social-theme :content="content"></social-theme>

      <div class="center-col">
        <router-link :to="{ name: 'CreateEdit', params: {} }">
          Redigera jämförelse
        </router-link>
      </div>

    </div>

  </div>
</template>

<script>

import SocialTheme from '@/components/SocialTheme';
import SocialColumn from '@/components/SocialColumn';
import Factory from './Factory';
import Swatches from 'vue-swatches'
import { store } from '@/store';

export default {
  components:{
    SocialTheme,
    SocialColumn,
    Swatches
  },
  name: 'Create',
  data () {
    return {
      content: ""
    }
  },
  computed: {
    idTheme: function (){
      return store.state.idSelectedTheme;
    },
    theme: function () {
      //return store.state.content;
      return this.content;
    }
  },
  watch: {
  },
  methods: {
    initContent: function () {

      let storage = false;

      if (typeof(Storage) !== "undefined") {
        let stored = JSON.parse(sessionStorage.getItem("userCreate"));
        if(stored != null){
          this.content = stored;
          storage = true;
        }
      }

    },
    reset: function () {
      this.content = Factory.Comparison();
    },
    addColumn: function () {
      this.content.columns.push(Factory.Column());
    },
    addItem: function (columnId) {
      this.content.columns[columnId].items.push(Factory.Item());
    },
  },
  mounted () {

    this.initContent();

    var idTheme = this.$route.params.id ? this.$route.params.id : 0;
    store.commit('setSelectedThemeId',idTheme);
    //store.commit('setContent',this.content.themes[idTheme]);

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

</style>
