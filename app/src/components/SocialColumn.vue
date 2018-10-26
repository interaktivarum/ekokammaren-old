<template>
  <div class="socialColumn" :style="{'width': width + 'px'}">

    <div class="header">
      <editable-input v-model="content.header" type="input" placeholder="Rubrik" tag="h2"></editable-input>
    </div>

    <!--social-parser :column="index" :addToTop="true" class="addItem"></social-parser-->

    <div  v-if="content.items.length > 0" class="items">
      <social-item v-for="item in content.items" :content="item" :width="widthItem" class="item"></social-item>
    </div>

    <social-parser :column="index" class="addItem"></social-parser>

    <!--pre>
      {{content}}
    </pre-->

  </div>
</template>

<script>

import SocialItem from './SocialItem';
import SocialParser from './SocialParser';
import EditableInput from './EditableInput';

export default {
  components:{
    SocialItem,
    SocialParser,
    EditableInput
  },
  name: 'SocialColumn',
  props:{
    index: "",
    content: { default: null },
    header: {default: ""},
    width: {default: 0}
  },
  data () {
    return {
    }
  },
  computed: {
    widthItem: function (){
      return this.width - 20; //padding
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.socialColumn{
  border: 1px solid rgb(200,200,200);
}

.socialColumn:last-child{
}

.header{
  position: sticky;
  display: grid;
  top: -1px;
  z-index: 1;
  text-align: center;
  background: rgba(255,255,255,1);
  border-bottom: 5px solid lightgray;
}

.items{
  padding: 10px 10px 10px 10px;
  background: rgb(230,230,230);
}

.item{
  position: relative;
}

.addItem{

}

</style>
