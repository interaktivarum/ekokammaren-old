<template>
  <div class="socialItem">
    <div class="component-content">


      <!--iframe :src="src" :width="width" height="auto" style="border:none;" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe-->

      <social-embed :content="content"></social-embed>

      <!--embed-facebook v-if="content.platform == 'facebook'" :content="content" :width="width"></embed-facebook>
      <embed-twitter v-if="content.platform == 'twitter'" :content="content" :width="width"></embed-twitter>
      <embed-instagram v-if="content.platform == 'instagram'" :content="content" :width="width"></embed-instagram>
      <embed-youtube v-if="content.platform == 'youtube'" :content="content" :width="width"></embed-youtube>
      <embed-website v-if="content.platform == 'website'" :content="content" :width="width"></embed-website>
      <embed-test v-if="content.platform == 'test'" :content="content" :width="width"></embed-test-->

      <!--div class="comment" v-if="content.comment">
        <editable-input v-model="content.comment" type="textarea" placeholder="Rubrik" tag="span"></editable-input>
      </div-->
    </div>

  </div>
</template>

<script>

import SocialEmbed from './SocialEmbed';

import EmbedTwitter from './EmbedTwitter';
import EmbedFacebook from './EmbedFacebook';
import EmbedInstagram from './EmbedInstagram';
import EmbedYoutube from './EmbedYoutube';
import EmbedWebsite from './EmbedWebsite';
import EmbedTest from './EmbedTest';
import EditableInput from './EditableInput';

export default {
  components:{
    SocialEmbed,
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
  },
  data () {
    return {
    }
  },
  computed:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.component-content{
  background: white;
  overflow: scroll;
  padding: 0;
  margin: 0;
  /*padding: 10px 0 10px 0;
  border-bottom: 1px solid lightgray;*/
}

</style>
