<template>
  <div class="component">
    <div class="component-content">

      <div class="topSection center-col">

        <h1 v-if="content.header">{{content.header}}</h1>
        <h1 v-if="!content.header" class="text-gray">Jämförelsen saknar rubrik</h1>

        <p class="description">
          {{content.description}}
        </p>

      </div>

      <div class="columns" :class="{'overflow': overflow}" id="columns">
        <div v-for="(column,index) in content.columns" class="column">
          <social-column :content="column" :index="index"  ></social-column>

          <div class="scrollArea font3 screenSmall" v-if="index < content.columns.length - 1" :style="{'background-color':content.columns[index+1].color}">
            Scrolla ner för kolumn: {{content.columns[index+1].header}}
          </div>

        </div>

      </div>
      <h3 v-if="content.columns && !content.columns.length" class="center-col text-gray">
        Jämförelsen saknar kolumner
      </h3>

      <hr class="margin" />

      <div class="bottomSection center-col creator">
        <p>
          <i v-if="content.header">{{content.header}}</i>
          <span v-if="!content.header">Sidan</span>
          är skapad som en jämförelse ur olika perspektiv.
        </p>

        <p>
          Jämförelsen presenterar inlägg från olika avsändare på sociala medier, YouTube, nyhetssidor, diskussionsforum och webbplatser. Respektive avsändare ansvarar för det innehåll och de åsikter som uttrycks i de egna inläggen.
        </p>

        <p>
          Kategoriseringen och urvalet av inlägg är skapat manuellt. Utvalda avsändare eller inlägg har inte själva uttryckt tillhörighet till respektive kategori. Respektive avsändare i en och samma kategori har nödvändigtvis ingen relation till varandra.
        </p>

      </div>

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
      width: 0,
      overflow: false
    }
  },
  computed: {

  },
  methods: {
    isOverflowing: function () {
      let el = document.getElementById("columns");
      return el.scrollWidth > el.offsetWidth;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.description{
  margin-bottom: 50px;
}

.creator{
  color: gray;
}

.columns{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  background: white;
}

.columns.overflow{
  justify-content: flex-start;
}

.column{
  flex: 0 1 450px;
  border: 1px solid rgb(200,200,200);
  margin: 0 5px 0 5px;
}

.scrollArea{
  position: sticky;
  bottom: 0px;
  text-align: center;
  padding: 5px;
}

@media screen and (max-width: 600px) {

  .columns{
    display: inline;
  }

  .column{
    border: 0;
    margin: 0;
  }

}

</style>
