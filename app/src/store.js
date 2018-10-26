import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    content: null,
    idSelectedTheme: 0,
    fb: null,
    firebase: ""
  },
  mutations: {

    setSelectedThemeId: (state, id) => {
      state.idSelectedTheme = id;
    },

    setContent: (state,content) => {
      state.content = content;
    },

    addItemToColumn: (state, params) => {
      if(!params.addToTop){
        state.content.columns[params.idColumn].items.push(params.item);
      }
      else{
        state.content.columns[params.idColumn].items.splice(0, 0, params.item);
      }
    },

    loadTwitterAPI: (state) => {
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'twitter-jssdk'));

      console.log("load twitter");
    },

    reloadTwitterAPI: (state) => {
      (function(d, id) {
        if (d.getElementById(id)){
          d.getElementById(id).remove();
        };
      }(document, 'twitter-jssdk'));

      console.log("reload twitter");

      store.commit('loadTwitterAPI');

    },

    loadInstagramAPI: (state) => {
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://www.instagram.com/embed.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'instagram-jssdk'));
    },

    reloadInstagramAPI: (state) => {
      /*(function(d, id) {
        if (d.getElementById(id)){
          d.getElementById(id).remove();
        };
      }(document, 'instagram-jssdk'));

      this.loadInstagramAPI(state);*/
      window.instgrm.Embeds.process();
      console.log(window.instgrm);

    },

    setFB: (state, fb) => {
      state.fb = fb;
    },

    loadFacebookAPI: (state) => {

      (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    },

    reloadFacebookElement: (state, element) => {
      FB.XFBML.parse(element);
    }

  },
  getters: {

    isSelectedTheme: state => {
      return state.idSelectedTheme > -1;
    },

  },
});
