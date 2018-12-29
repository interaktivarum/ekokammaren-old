<template>
  <span>
    <div class="og-container" :style="{width: width}" @click="openurl" v-if="!error">
        <div class="image" :style="{'background-image': 'url(' + content['og:image'] + ')', height: imgheight+'px' }"></div>
        <div class="text" v-if="content">
          <div class="textContainer">
            <strong>{{content["og:title"]}}</strong>
            <p>
              {{content["og:description"]}}
            </p>
            <p class="site">
              {{content["og:site_name"]}}
              <span v-if="published"> -
                {{published}}
              </span>
            </p>
          </div>
        </div>
    </div>
    <div v-if="error" class="error">
      <a :href="url" target="_blank">{{url}}</a>
      <br />
      Det går inte att förhandsvisa webbplatsen
    </div>

  </span>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      content: "",
      published: "",
      error: false
    }
  },
  props: {
    url: {},
    width: {},
    layout: "cols"
  },
  computed: {
    imgheight: function () {
      return this.width / 1200 * 630;
    }
  },
  methods: {
    onsuccess: function (response){
      if(!Array.isArray(response.body)){
        this.content = response.body;
        this.published = this.content["article:published_time"] ? new Date(this.content["article:published_time"]).toLocaleDateString() : null;
      }
      else{
        this.error = true;
      }
    },
    onerror: function (response){
      this.error = true
    },
    openurl: function () {
      window.open(this.url);
    }
  },
  mounted: function () {
    var formData = new FormData();
    formData.append('url', this.url);
    this.$http.post("https://api.ekokammaren.se/ogembed/",formData).then(this.onsuccess,this.onerror);
  }
}
</script>

<style scoped>

  .og-container{
    width: 100%;
    display: inline-flex;
    cursor: pointer;
    border: 1px solid #ddd;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .og-container.rows{
    flex-direction: column;
  }

  .og-container:hover{
    /*border-color: #f60;*/
    box-shadow: 2px 2px lightgray;
  }

  .og-container .image{
    background-size: cover;
    background-position: center;
  }

  .og-container .text{
    font-size: 11pt;
    line-height: normal;
    overflow-y: scroll;
  }

  .textContainer {
    padding: 10px;
  }

  .og-container .site{
    color: #555;
    text-transform: uppercase;
    font-size: smaller;
  }

  .error{
    text-align: center;
    padding: 10px;
    color: gray;
  }

</style>
