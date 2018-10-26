<template>
  <div class="socialItem">
    <!--iframe :src="src" :width="width" height="auto" style="border:none;" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe-->
    <embed-facebook v-if="content.platform == 'facebook'" :content="content" :width="width"></embed-facebook>
    <embed-twitter v-if="content.platform == 'twitter'" :content="content" :width="width"></embed-twitter>
    <embed-instagram v-if="content.platform == 'instagram'" :content="content" :width="width"></embed-instagram>
    <embed-youtube v-if="content.platform == 'youtube'" :content="content" :width="width"></embed-youtube>
    <embed-website v-if="content.platform == 'website'" :content="content" :width="width"></embed-website>
    <embed-test v-if="content.platform == 'test'" :content="content" :width="width"></embed-test>

    <div class="comment" v-if="content.comment">
      <editable-input v-model="content.comment" type="textarea" placeholder="Rubrik" tag="span"></editable-input>
    </div>

  </div>
</template>

<script>

import EmbedTwitter from './EmbedTwitter';
import EmbedFacebook from './EmbedFacebook';
import EmbedInstagram from './EmbedInstagram';
import EmbedYoutube from './EmbedYoutube';
import EmbedWebsite from './EmbedWebsite';
import EmbedTest from './EmbedTest';
import EditableInput from './EditableInput';

export default {
  components:{
    EmbedTwitter,
    EmbedFacebook,
    EmbedInstagram,
    EmbedYoutube,
    EmbedWebsite,
    EmbedTest,
    EditableInput
  },
  name: 'SocialItem',
  props:{
    content: {default: null},
    width: ""
  },
  data () {
    return {
    }
  },
  computed:{
    src: function (){
      return "https://www.facebook.com/plugins/post.php?href=" + this.href + "&width=" + this.width;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.socialItem{
  width: 100%;
  background: white;
  margin-bottom: 10px;
  /*padding: 10px 0 10px 0;
  border-bottom: 1px solid lightgray;*/
}

.comment{
  background: rgb(50,50,50);
  color: white;
  padding: 10px;
  font-size: smaller;
}

</style>
