<template>
  <div class="component">
    <div class="component-content center-col">
      <!--social-theme v-if="theme" v-model="theme"></social-theme-->

      <h1>Skapa jämförelse</h1>

      <div class="space-between bg-gray">
        <router-link :to="{ name: 'CreatePresent', params: {} }">
          Visa jämförelse<span v-if="content.header">: {{content.header}}</span>
        </router-link>
        <button @click="reset()" class="red">Rensa all data</button>
      </div>

      <p class="text-gray text-small">
        Dina ändringar sparas automatiskt i webbläsaren.
        Ändringarna försvinner när du stänger webbläsarfliken.
        <router-link :to="{ name: 'CreateExample', params: {} }">Visa exempeljämförelse</router-link>.
      </p>

      <hr class="margin"/>

      <h2>Rubrik</h2>
      <instruction text="Välj ett ämne för jämförelsen och ange en rubrik" :active="!content.header"></instruction>
      <div class="header bg-gray">
        <input v-model="content.header" placeholder="Rubrik"></input>
      </div>

      <br />

      <h2>Beskrivning</h2>
      <instruction text="Ange en beskrivning av jämförelsen" :active="!content.description"></instruction>
      <div class="description bg-gray">
        <textarea v-model="content.description" placeholder="I den här jämförelsen kan du se..."></textarea>
      </div>

      <br />

      <h2>Kolumner</h2>
      <instruction text="Skapa en kolumn för varje perspektiv som ska jämföras" :active="content.columns && !content.columns.length"></instruction>
      <div class="bg-gray">

        <div class="center">
          <button @click="addColumn(0)" class="green rounded" title="Lägg till kolumn">+</button>
        </div>

        <div v-for="(column,indexColumn) in content.columns">

          <div class="column" :style="{'border-left-color':column.color}">
            <h4>Rubrik</h4>
            <instruction text="Välj ett perspektiv att jämföra och ange en rubrik" :active="!column.header"></instruction>
            <input v-model="column.header" :placeholder="'Rubrik för kolumn ' + (indexColumn+1)" :style="{'border-color':column.color}"/>

            <h4>Beskrivning</h4>
            <instruction text="Ange en beskrivning av kolumnen" :active="!column.description"></instruction>
            <textarea v-model="column.description" placeholder="I den här kolumnen visas inlägg som..."></textarea>

            <h4>Inlägg</h4>
            <ol>
              <li v-for="(item,indexItem) in column.items">
                <instruction text="Klistra in webbadress till ett inlägg som passar i kolumnen" :active="!item.href.length">

                  <p>
                    <strong>Instagram</strong>: öppna en bild/video genom att klicka på inlägget. Kopiera webbadressen. Ex. <a href="https://www.instagram.com/p/BpS-6OKg9Fs" target="_blank">https://www.instagram.com/p/BpS-6OKg9Fs</a>
                  </p>
                  <p>
                    <strong>Youtube</strong>: öppna en video. Kopiera webbadressen. Ex. <a href="https://www.youtube.com/watch?v=EsoQGTA1SxY" target="_blank">https://www.youtube.com/watch?v=EsoQGTA1SxY</a>
                  </p>
                  <p>
                    <strong>Facebook</strong>: öppna ett inlägg genom att klicka på klockslaget under avsändaren. Kopiera webbadressen. Ex. <a href="https://www.facebook.com/facebook/photos/a.376995711728/10157625951231729" target="_blank">https://www.facebook.com/facebook/photos/a.376995711728/10157625951231729</a>
                  </p>
                  <p>
                    <strong>Twitter</strong>: öppna ett inlägg genom att klicka på klockslaget bredvid avsändaren. Kopiera webbadressen. Ex. <a href="https://twitter.com/Twitter/status/1055202622888538113" target="_blank">https://twitter.com/Twitter/status/1055202622888538113</a>
                  </p>
                  <p>
                    <strong>Webbplats/nyhetsartikel/foruminlägg</strong>: Öppna en webbplats/artikel/inlägg. Kopiera webbadressen. Ex. <a href="https://www.svt.se/nyheter/inrikes/vad-ar-public-service-egentligen-och-varfor-finns-det" target="_blank">https://www.svt.se/nyheter/inrikes/vad-ar-public-service-egentligen-och-varfor-finns-det</a> <i>(alla webbplatser kommer inte att förhandsvisa bild och text)</i>
                  </p>

                </instruction>
                <input v-model="item.href" :placeholder="'Webbadress för inlägg ' + (indexItem+1)" class="small gray"/>
              </li>
              <button @click="addItem(indexColumn)" class="green" title="Lägg till inlägg">Lägg till inlägg</button>
            </ol>

            <div class="space-between">
              <swatches v-model="column.color" inline swatch-size="15" colors="material-basic" class="swatches" background-color="transparent"></swatches>
              <button @click="removeColumn(indexColumn)" class="red" title="Ta bort kolumn">Ta bort kolumn</button>
            </div>

          </div>

          <div class="center">
            <button @click="addColumn(indexColumn+1)" class="green rounded" title="Lägg till kolumn">+</button>
          </div>

        </div>

      </div>

      <br />

      <div class="bg-gray">
        <router-link :to="{ name: 'CreatePresent', params: {} }">
          Visa jämförelse<span v-if="content.header">: {{content.header}}</span>
        </router-link>
      </div>

    </div>

  </div>
</template>

<script>

import SocialTheme from '@/components/SocialTheme';
import SocialColumn from '@/components/SocialColumn';
import Factory from './Factory';
import Instruction from '@/components/Instruction';
import Swatches from 'vue-swatches'
import { store } from '@/store';

export default {
  components:{
    SocialTheme,
    SocialColumn,
    Instruction,
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
    content: {
      handler: function () {
        this.saveToLocal();
      },
      deep: true
    }
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

      if(!storage){
        this.content = Object.assign({},Factory.Comparison());
      }

    },
    saveToLocal: function () {
      console.log("Save to local")
      if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("userCreate", JSON.stringify(this.content));
      }
    },
    reset: function () {
      this.content = Factory.Comparison();
    },
    addColumn: function (id) {
      this.content.columns.splice(id,0,Factory.Column());
      //this.content.columns.push(Factory.Column());
    },
    removeColumn: function (id){
      this.content.columns.splice(id,1);
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

.column{
  background: rgb(245,245,245);
  border: 2px solid lightgray;
  border-left: 6px solid gray;
  padding: 10px;
  margin: 5px 0px 5px 0px;
}

.bg-gray{
  background: rgb(240,240,240);
  border: 1px solid lightgray;
  padding: 10px;
}

.swatches{
  filter: saturate(1);
  /*transition: all 0.25s;*/
}

.column:hover .swatches{
  /*filter: saturate(1);*/
}

</style>
