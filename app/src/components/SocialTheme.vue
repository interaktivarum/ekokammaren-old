<template>
  <div class="socialTheme">

    <div class="topSection">

      <div class="header">
        <editable-input v-model="content.header" type="input" placeholder="Rubrik" tag="h1" class="underline" ></editable-input>
      </div>

      <p class="description">
        <editable-input v-model="content.description" type="textarea" placeholder="Beskrivning" tag="span"></editable-input>
      </p>

    </div>

    <div class="columns">
      <social-column v-for="(column,index) in content.columns" width="450" :content="column" :index="index" class="column"></social-column>
    </div>

    <div class="bottomSection">

      <p class="creator">
        Jämförelsen <i>{{content.header}}</i> är skapad av besökare till Ekokammaren.
        <br />
        Ekokammaren ansvarar ej för dess innehåll eller uttryckta åsikter.
      </p>

    </div>

  </div>
</template>

<script>

import SocialColumn from './SocialColumn';
import EditableInput from './EditableInput';

export default {
  components:{
    SocialColumn,
    EditableInput
  },
  name: 'SocialTheme',
  props: {
    content: ""
  },
  data () {
    return {
      test: "testar"
    }
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.socialTheme{
}

.topSection, .bottomSection{
  max-width: 900px;
  margin: 0 auto;
}

.header{
  margin-top: 30px;
  margin-bottom: 30px;
}

.header .underline{
  display: inline-block;
  padding-bottom: 15px;
  margin-bottom: 0px;
  border-bottom: 5px solid gray;
}

.description, .creator{
  text-align: left;
  margin: 30px auto;
}

.creator{
  color: rgb(50,50,50);
}

.columns{
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  background: white;
}

.column{
  margin: 10px 10px 10px 0px;
}

.column:last-child{
  margin-right: 0px;
}

</style>
