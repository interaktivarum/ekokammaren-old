<template>
  <div class="component">
    <div class="component-content">

      <embed-facebook v-if="platform == 'facebook'" :content="parsedUrl" :width="width"></embed-facebook>
      <embed-twitter v-if="platform == 'twitter'" :content="parsedUrl" :width="width"></embed-twitter>
      <embed-instagram v-if="platform == 'instagram'" :content="parsedUrl" :width="width"></embed-instagram>
      <embed-youtube v-if="platform == 'youtube'" :content="parsedUrl" :width="width"></embed-youtube>
      <embed-website v-if="platform == 'website'" :content="parsedUrl" :width="width"></embed-website>
      <!--embed-test v-if="platform == 'test'" :content="content" :width="width"></embed-test-->

    </div>
  </div>
</template>

<script>

import { store } from '@/store';

import EmbedTwitter from './EmbedTwitter';
import EmbedFacebook from './EmbedFacebook';
import EmbedInstagram from './EmbedInstagram';
import EmbedYoutube from './EmbedYoutube';
import EmbedWebsite from './EmbedWebsite';

export default {
  components:{
    EmbedTwitter,
    EmbedFacebook,
    EmbedInstagram,
    EmbedYoutube,
    EmbedWebsite,
  },
  name: 'SocialEmbed',
  props:{
    content: {default: null},
  },
  data () {
    return {
      href: "",
      width: {type: Number, default: 0}
    }
  },
  computed:{
    http: function () {
      let href = this.content.href.trim();
      if (!/^https?:\/\//i.test(href)) {
        href = 'https://' + href;
      }
      return href;
    },
    parsedUrl: function () {
      var parse = require('url-parse');
      return parse(this.http, true);
    },
    platform: function (){
      switch(this.parsedUrl.hostname) {
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
    }
  },
  methods: {
    computeWidth: function () {
      this.width = this.$el.offsetWidth;
    },
  },
  updated: function () {
    this.$nextTick(function () {
      this.computeWidth();
    });
  },
  mounted: function () {
    this.$nextTick(function () {
      this.computeWidth();
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.component-content{
}

</style>
