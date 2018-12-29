<template>
  <div class="component">
    <div class="component-content">

    <div class="header" :style="{'background-color': content.color}">
      <h2 v-if="content.header">{{content.header}}</h2>
      <h2 v-if="!content.header" class="text-gray">Kolumnen saknar rubrik</h2>
    </div>

    <div class="description" :style="{'border-color': content.color}">
      <span v-if="content.description">
        {{content.description}}
      </span>
      <span v-if="!content.description">
        Kolumnen saknar beskrivning
      </span>
    </div>

    <!--social-parser :column="index" :addToTop="true" class="addItem"></social-parser-->

    <div  v-if="content.items.length > 0" class="items">
      <social-item v-for="item in content.items" :content="item" class="item" v-if="item.href"></social-item>
    </div>

    <!--social-parser :column="index" class="addItem"></social-parser-->
  </div>
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
  },
  data () {
    return {
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.component-content{
  /*border: 0px solid rgb(200,200,200);*/
}

.socialColumn:last-child{
}

.header{
  position: sticky;
  top: -1px;
  bottom: 0px;
  z-index: 1;
  padding: 5px;
  text-align: center;
  background: white;
}

.description{
  padding: 20px;
  font-size: 10pt;
  background: rgb(240,240,240);
  color: rgb(50,50,50);
  border-top: 3px solid lightgray;
  border-bottom: 3px solid lightgray;
}

.items{
  padding: 10px 10px 10px 10px;
  background: rgb(230,230,230);
  box-sizing: border-box;
}

.item{
  border: 1px solid lightgray;
  box-shadow: 2px 2px 2px gray;
  margin-bottom: 5px;
}

.addItem{

}

@media screen and (max-width: 600px) {

  .items{
    padding: 5px;
  }

}

</style>
