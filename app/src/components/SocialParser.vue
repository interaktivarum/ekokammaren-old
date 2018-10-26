<template>
  <div class="socialParser">

    <input type="text" v-model="href" @change="parse" placeholder="Klistra in webbadress för att lägga till nytt innehåll"/>

    <!--p class="examples">
      <u>Exempel</u>
      <br />
      Youtube: https://www.youtube.com/watch?v=wc353OW5kW0
      <br />
      Facebook: https://www.facebook.com/mikoteket/posts/648535388863289
      <br />
      Twitter: https://twitter.com/statensmedierad/status/1014535207762972672
      <br />
      Instagram: https://www.instagram.com/p/BgnwYlSFV-J

    </p-->

  </div>
</template>

<script>

import { store } from '@/store';

export default {
  components:{
  },
  name: 'SocialParser',
  props:{
    content: {default: null},
    addToTop: {default: false, type: Boolean},
    column: "",
    width: ""
  },
  data () {
    return {
      href: ""
    }
  },
  computed:{
    src: function (){
      return "https://www.facebook.com/plugins/post.php?href=" + this.href + "&width=" + this.width;
    }
  },
  methods: {
    parse: function () {

      'use strict';
      var parse = require('url-parse');
      var parsedUrl = parse(this.href.trim(), true);

      console.log(parsedUrl);

      var item = {};
      item.platform = this.getPlatform(parsedUrl.hostname);
      item.href = this.getHref(parsedUrl,item.platform);
      item.id = this.parseId(parsedUrl,item.platform);
      item.reloadAPI = this.getReloadAPI(item.platform);
      item.comment = "";

      console.log(item.href);

      var params = {};
      params.idColumn = this.column;
      params.item = item;
      params.addToTop = this.addToTop;

      store.commit('addItemToColumn',params);

      this.href = "";

      //this.reloadApis(item.platform);

    },
    getPlatform: function(hostname){

      switch(hostname) {
        case "www.youtube.com":
        case "youtube.com":
          return "youtube";
          break;
        case "www.facebook.com":
        case "facebook.com":
          return "facebook"
          break;
        case "www.twitter.com":
        case "twitter.com":
          return "twitter"
          break;
        case "www.instagram.com":
        case "instagram.com":
          return "instagram"
          break;
        default:
          return "website"
      }
    },
    getHref: function (parsedUrl,platform){
      switch(platform) {
        case "youtube":
          return parsedUrl.href;
          break;
        case "facebook":
          return parsedUrl.origin + parsedUrl.pathname;
        case "twitter":
            return parsedUrl.origin + parsedUrl.pathname;
        case "instagram":
            return parsedUrl.origin + parsedUrl.pathname;
        case "website":
            return parsedUrl.href;
      }
    },
    parseId: function (parsedUrl,platform) {

      switch(platform) {
        case "youtube":
          return parsedUrl.query.v;
          break;
        case "facebook":
          return ""
        case "twitter":
          return ""
        case "instagram":
          return ""
      }

    },
    getReloadAPI: function (platform){
      switch(platform) {
        case "twitter":
        case "instagram":
        case "facebook":
          return true
          break;
      }
      return false;
    },
    reloadApis: function (platform) {
      switch(platform) {
        case "youtube":
          return parsedUrl.query.v;
          break;
        case "facebook":
          //store.commit('reloadFacebookAPI');
          break;
        case "twitter":
          store.commit('reloadTwitterAPI');
          break;
        case "instagram":
          store.commit('reloadInstagramAPI');
          break;
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.socialParser{
  background: white;
  border-top: 0px solid rgb(200,200,200);
  padding: 20px 10px 20px 10px;
  background: lightgray;
  color: white;
}

input {
  width: 100%;
  box-sizing: border-box;
  font-size: 11pt;
  padding: 10px;
  border: 0px solid black;
}

input:hover, input:focus{
  border-color: gray;
}

.examples{
  font-size: small;
}

</style>
