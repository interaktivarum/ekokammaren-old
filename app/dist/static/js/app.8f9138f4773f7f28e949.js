webpackJsonp([0],{"/j4M":function(t,e){},0:function(t,e){},"1s3c":function(t,e){},"72Bf":function(t,e){},"9+MM":function(t,e){t.exports={themes:[{header:"Rubrik",description:"Beskrivning",columns:[{header:"Kolumn 1",items:[]},{header:"Kolumn 2",items:[]}]},{header:"Genus och sexism i reklam och media",description:"Kvinnor och män porträtteras ofta olika i reklam och media. Medan kvinnor ofta ska vara snygga, sexiga och passiva framställs män ofta med pondus och som do:ers. Här nedan kan du jämföra olika avsändare och hur de använder modeller i sin marknadsföring.",columns:[{header:"Tjejer i reklam",items:[{platform:"facebook",href:"https://www.facebook.com/NewYorker.Fashion/photos/a.150987685781/10156428311655782/?type=3&theater",comment:"New Yorker och andra klädmärken anspelar ofta på sex när de ska sälja bad- och underkläder till tjejer."},{platform:"instagram",href:"https://www.instagram.com/p/BmWOMJljBP1",comment:""},{platform:"instagram",href:"https://www.instagram.com/p/BltKRqdjayU",comment:"Kollektionskampanj för kvinnor från Zara."}]},{header:"Killar i reklam",items:[{platform:"instagram",href:"https://www.instagram.com/p/BbY5D5zH-n_",comment:"Män som arbetar tillsammans."},{platform:"instagram",href:"https://www.instagram.com/p/Blu_sXUlz8C",comment:"Kollektionskampanj för män från Zara."}]},{header:"Organisationer & feminism",items:[{platform:"twitter",href:"https://twitter.com/Kvinnolobbyn/status/941583860063752193",comment:""},{platform:"facebook",href:"https://www.facebook.com/Reklamombudsmannen/posts/1894871927391494",comment:"Det finns även de som informerar om vad som gäller."},{platform:"youtube",href:"https://www.youtube.com/embed/5Sn3pgQJgII",id:"5Sn3pgQJgII",comment:""},{platform:"website",href:"https://www.mabra.com/konstnaren-vander-pa-konsrollerna-i-gammal-sexistisk-reklam/",id:"",comment:""}]}]},{header:"Greta Thunbergs skolstrejk",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",columns:[{header:"Stöd & kärlek",items:[{platform:"facebook",href:"https://www.facebook.com/dn.se/videos/657779774605701/",comment:""},{platform:"facebook",href:"https://www.facebook.com/ETCtidningarna/posts/10156214635340804",comment:""}]},{header:"Kritik & hat",items:[{platform:"facebook",href:"https://www.facebook.com/svegot/posts/1007262092793960",comment:""}]}]},{header:"Shopping och klimatet",description:"Jag bryr mig mycket om klimatet och följer många personer och konton som handlar om miljön. Jag gillar även shopping men vet att det är dåligt för klimatet att handla för mycket nya saker. Jag vill jämföra vad olika personer och sidor skriver om shopping och klimatet.",columns:[{header:"Shopping",items:[{platform:"instagram",href:"https://www.instagram.com/p/BnEmX85AgNx",id:"",comment:""},{platform:"website",href:"https://nyheter24.se/shopping/916052-105-prylar-for-dig-som-alskar-hosten",id:"",comment:""},{platform:"youtube",href:"https://www.youtube.com/watch?v=nXNTnUiwkIE",id:"nXNTnUiwkIE",comment:""}]},{header:"Hållbarhet",items:[{platform:"youtube",href:"https://www.youtube.com/watch?v=4W8EuQOvttY",id:"4W8EuQOvttY",comment:""},{platform:"instagram",href:"https://www.instagram.com/p/Bo30AUfhPVz",comment:""},{platform:"facebook",href:"https://www.facebook.com/naturskyddsforeningen/videos/2160756180847036",comment:""}]}]},{header:"Flyget och klimatet",description:"Jag bryr mig mycket om klimatet och följer många personer och konton som handlar om miljön. Jag gillar även att resa men vet att det är dåligt för klimatet att flyga för mycket. Jag vill jämföra vad olika personer och sidor skriver om resor och klimatet.",columns:[{header:"Resor",items:[{platform:"instagram",href:"https://www.instagram.com/p/BozNK9NHqen",id:"",comment:""}]},{header:"Hållbarhet",items:[{platform:"instagram",href:"https://www.instagram.com/p/BoiwzeJilKy",comment:""}]}]}]}},"AGC/":function(t,e){},Ats6:function(t,e){},Ewe5:function(t,e){},G779:function(t,e){},InvZ:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},o,!1,function(t){n("InvZ")},null,null).exports,r=n("/ocq"),s=n("NYxO");a.a.use(s.a);var c=new s.a.Store({state:{content:null,idSelectedTheme:0,fb:null},mutations:{setSelectedThemeId:function(t,e){t.idSelectedTheme=e},setContent:function(t,e){t.content=e},addItemToColumn:function(t,e){e.addToTop?t.content.columns[e.idColumn].items.splice(0,0,e.item):t.content.columns[e.idColumn].items.push(e.item)},loadTwitterAPI:function(t){var e,n,a,o,i;e=document,n="script",a="twitter-jssdk",i=e.getElementsByTagName(n)[0],e.getElementById(a)||((o=e.createElement(n)).id=a,o.src="https://platform.twitter.com/widgets.js",i.parentNode.insertBefore(o,i)),console.log("load twitter")},reloadTwitterAPI:function(t){var e,n;e=document,n="twitter-jssdk",e.getElementById(n)&&e.getElementById(n).remove(),console.log("reload twitter"),c.commit("loadTwitterAPI")},loadInstagramAPI:function(t){var e,n,a,o,i;e=document,n="script",a="instagram-jssdk",i=e.getElementsByTagName(n)[0],e.getElementById(a)||((o=e.createElement(n)).id=a,o.src="https://www.instagram.com/embed.js",i.parentNode.insertBefore(o,i))},reloadInstagramAPI:function(t){window.instgrm.Embeds.process(),console.log(window.instgrm)},setFB:function(t,e){t.fb=e},loadFacebookAPI:function(t){var e,n,a,o,i;e=document,n="script",a="facebook-jssdk",i=e.getElementsByTagName(n)[0],e.getElementById(a)||((o=e.createElement(n)).id=a,o.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6",i.parentNode.insertBefore(o,i))},reloadFacebookElement:function(t,e){FB.XFBML.parse(e)}},getters:{isSelectedTheme:function(t){return t.idSelectedTheme>-1}}}),m={name:"EmbedTwitter",props:{content:"",width:""},data:function(){return{}},mounted:function(){this.content.reloadAPI&&c.commit("reloadTwitterAPI")},computed:{}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"embedTwitter"},[e("blockquote",{staticClass:"twitter-tweet",staticStyle:{"'margin-bottom'":"'0px'"},attrs:{"data-lang":"sv"}},[e("a",{attrs:{href:this.content.href}},[this._v("Twitter")])])])},staticRenderFns:[]};var l=n("VU/8")(m,d,!1,function(t){n("Xzyr")},"data-v-a13d72c8",null).exports,u={name:"EmbedFacebook",props:{content:"",width:""},data:function(){return{}},mounted:function(){this.content.reloadAPI&&c.commit("reloadFacebookElement",this.$el)},computed:{}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"embedFacebook"},[e("div",{staticClass:"fb-post",attrs:{"data-href":this.content.href,"data-width":this.width,"data-show-text":"true"}},[e("blockquote",{staticClass:"fb-xfbml-parse-ignore",attrs:{cite:this.content.href}},[e("a",{attrs:{href:this.content.href}},[this._v("Facebook")])])])])},staticRenderFns:[]};var p=n("VU/8")(u,h,!1,function(t){n("72Bf")},"data-v-01d8bf85",null).exports,f={name:"EmbedInstagram",props:{content:"",width:""},data:function(){return{}},mounted:function(){this.content.reloadAPI&&window.instgrm.Embeds.process()},computed:{}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"embedInstagram"},[e("blockquote",{staticClass:"instagram-media",staticStyle:{width:"100%"},attrs:{"data-instgrm-captioned":"","data-instgrm-permalink":this.content.href,"data-instgrm-version":"9"}},[e("a",{attrs:{href:this.content.href}},[this._v("Instagram")])])])},staticRenderFns:[]};var g=n("VU/8")(f,w,!1,function(t){n("YZpU")},"data-v-ff53bf90",null).exports,v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"embedYoutube"},[e("iframe",{attrs:{width:this.width,height:this.height,src:this.src,frameborder:"0",allow:"encrypted-media",allowfullscreen:""}})])},staticRenderFns:[]};var b=n("VU/8")({name:"EmbedYoutube",props:{content:"",width:""},data:function(){return{}},mounted:function(){},computed:{src:function(){return"https://www.youtube.com/embed/"+this.content.id},height:function(){return.5625*this.width}}},v,!1,function(t){n("1s3c")},"data-v-7b99b1c9",null).exports,k={components:{},data:function(){return{content:"",published:""}},props:{url:{},width:{},layout:"cols"},computed:{imgheight:function(){return this.width/1200*630}},methods:{onsuccess:function(t){this.content=t.body,this.published=this.content["article:published_time"]?new Date(this.content["article:published_time"]).toLocaleDateString():null},onerror:function(t){},openurl:function(){window.open(this.url)}},mounted:function(){var t=new FormData;t.append("url",this.url),this.$http.post("https://api.ekokammaren.se/ogembed/",t).then(this.onsuccess,this.onerror)}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("div",{staticClass:"og-container",style:{width:t.width},on:{click:t.openurl}},[n("div",{staticClass:"image",style:{"background-image":"url("+t.content["og:image"]+")",height:t.imgheight+"px"}}),t._v(" "),t.content?n("div",{staticClass:"text"},[n("div",{staticClass:"textContainer"},[n("strong",[t._v(t._s(t.content["og:title"]))]),t._v(" "),n("p",[t._v("\n            "+t._s(t.content["og:description"])+"\n          ")]),t._v(" "),n("p",{staticClass:"site"},[t._v("\n            "+t._s(t.content["og:site_name"])+"\n            "),t.published?n("span",[t._v(" -\n              "+t._s(t.published)+"\n            ")]):t._e()])])]):t._e()])])},staticRenderFns:[]};var y={name:"EmbedWebsite",components:{OgEmbed:n("VU/8")(k,_,!1,function(t){n("PZsL")},"data-v-48052dec",null).exports},props:{content:"",href:"",width:""},data:function(){return{}},mounted:function(){},computed:{src:function(){return"https://www.youtube.com/embed/"+this.content.id},height:function(){return.5625*this.width}}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"EmbedWebsite"},[e("og-embed",{attrs:{url:this.content.href,width:this.width}})],1)},staticRenderFns:[]};var x=n("VU/8")(y,E,!1,function(t){n("kuCO")},"data-v-1b24adb6",null).exports,C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"embedTest"},[e("iframe",{attrs:{width:this.width,height:this.height,src:this.src,frameborder:"0",allow:"encrypted-media",allowfullscreen:""}})])},staticRenderFns:[]};var T=n("VU/8")({name:"EmbedTest",props:{content:"",href:"",width:""},data:function(){return{}},mounted:function(){},computed:{src:function(){return"https://www.youtube.com/embed/"+this.content.id},height:function(){return.5625*this.width}}},C,!1,function(t){n("/j4M")},"data-v-17ab05ca",null).exports,I={name:"WrapperComponent",render:function(t){return t(this.tag,this.$slots.default)},props:{tag:{type:String,required:!0}}},S={name:"EditableInput",components:{WrapperComponent:n("VU/8")(I,null,!1,null,null,null).exports},props:{value:String,tag:"",placeholder:{default:"Enter text"},type:{default:"input"}},data:function(){return{editing:!1,textTemp:String,width:"",height:""}},computed:{inputVisible:function(){return this.editing||""==this.value}},watch:{},methods:{openEdit:function(){this.calcWidth(),this.editing=!0,this.textTemp=this.value,this.$nextTick(function(t){this.$refs.input.focus()})},finishEdit:function(t){this.editing&&t&&this.emitToParent(),this.editing=!1},calcWidth:function(){this.$nextTick(function(){var t=this.$el.getElementsByClassName("textSpan")[0];t&&(this.width=t.offsetWidth,this.height=t.offsetHeight)})},emitToParent:function(){var t=""!==this.textTemp.trim()?this.textTemp:this.placeholder;this.$emit("input",t)}}},P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editableInput"},[n("wrapper-component",{staticClass:"text",attrs:{tag:t.tag,id:"eiTemp"}},[t.inputVisible?t._e():n("div",{staticClass:"textContainer"},[n("span",{staticClass:"textSpan"},[t._v("\n        "+t._s(t.value)+"\n      ")]),t._v(" "),n("a",{staticClass:"edit",on:{click:function(e){t.openEdit()}}},[t._v("\n        Redigera\n      ")])]),t._v(" "),t.inputVisible?n("div",["input"==t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.textTemp,expression:"textTemp"}],ref:"input",style:{width:t.width+"px",height:t.height+"px"},attrs:{placeholder:t.placeholder},domProps:{value:t.textTemp},on:{keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.finishEdit(!1)},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.finishEdit(!0)}],blur:function(e){t.finishEdit(!0)},input:function(e){e.target.composing||(t.textTemp=e.target.value)}}}):t._e(),t._v(" "),"textarea"==t.type?n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textTemp,expression:"textTemp"}],ref:"input",style:{width:t.width+"px",height:t.height+"px"},attrs:{placeholder:t.placeholder},domProps:{value:t.textTemp},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.finishEdit(!1)},blur:function(e){t.finishEdit(!0)},input:function(e){e.target.composing||(t.textTemp=e.target.value)}}}):t._e()]):t._e()])],1)},staticRenderFns:[]};var B=n("VU/8")(S,P,!1,function(t){n("Ats6")},"data-v-500e6923",null).exports,j={components:{EmbedTwitter:l,EmbedFacebook:p,EmbedInstagram:g,EmbedYoutube:b,EmbedWebsite:x,EmbedTest:T,EditableInput:B},name:"SocialItem",props:{content:{default:null},width:""},data:function(){return{}},computed:{src:function(){return"https://www.facebook.com/plugins/post.php?href="+this.href+"&width="+this.width}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"socialItem"},["facebook"==t.content.platform?n("embed-facebook",{attrs:{content:t.content,width:t.width}}):t._e(),t._v(" "),"twitter"==t.content.platform?n("embed-twitter",{attrs:{content:t.content,width:t.width}}):t._e(),t._v(" "),"instagram"==t.content.platform?n("embed-instagram",{attrs:{content:t.content,width:t.width}}):t._e(),t._v(" "),"youtube"==t.content.platform?n("embed-youtube",{attrs:{content:t.content,width:t.width}}):t._e(),t._v(" "),"website"==t.content.platform?n("embed-website",{attrs:{content:t.content,width:t.width}}):t._e(),t._v(" "),"test"==t.content.platform?n("embed-test",{attrs:{content:t.content,width:t.width}}):t._e(),t._v(" "),t.content.comment?n("div",{staticClass:"comment"},[n("editable-input",{attrs:{type:"textarea",placeholder:"Rubrik",tag:"span"},model:{value:t.content.comment,callback:function(e){t.$set(t.content,"comment",e)},expression:"content.comment"}})],1):t._e()],1)},staticRenderFns:[]};var F=n("VU/8")(j,$,!1,function(t){n("szSE")},"data-v-377b31f0",null).exports,A={components:{},name:"SocialParser",props:{content:{default:null},addToTop:{default:!1,type:Boolean},column:"",width:""},data:function(){return{href:""}},computed:{src:function(){return"https://www.facebook.com/plugins/post.php?href="+this.href+"&width="+this.width}},methods:{parse:function(){var t=n("dyOy"),e=t(this.href.trim(),!0);console.log(e);var a={};a.platform=this.getPlatform(e.hostname),a.href=this.getHref(e,a.platform),a.id=this.parseId(e,a.platform),a.reloadAPI=this.getReloadAPI(a.platform),a.comment="",console.log(a.href);var o={};o.idColumn=this.column,o.item=a,o.addToTop=this.addToTop,c.commit("addItemToColumn",o),this.href=""},getPlatform:function(t){switch(t){case"www.youtube.com":case"youtube.com":return"youtube";case"www.facebook.com":case"facebook.com":return"facebook";case"www.twitter.com":case"twitter.com":return"twitter";case"www.instagram.com":case"instagram.com":return"instagram";default:return"website"}},getHref:function(t,e){switch(e){case"youtube":return t.href;case"facebook":case"twitter":case"instagram":return t.origin+t.pathname;case"website":return t.href}},parseId:function(t,e){switch(e){case"youtube":return t.query.v;case"facebook":case"twitter":case"instagram":return""}},getReloadAPI:function(t){switch(t){case"twitter":case"instagram":case"facebook":return!0}return!1},reloadApis:function(t){switch(t){case"youtube":return parsedUrl.query.v;case"facebook":break;case"twitter":c.commit("reloadTwitterAPI");break;case"instagram":c.commit("reloadInstagramAPI")}}}},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"socialParser"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.href,expression:"href"}],attrs:{type:"text",placeholder:"Klistra in webbadress för att lägga till nytt innehåll"},domProps:{value:t.href},on:{change:t.parse,input:function(e){e.target.composing||(t.href=e.target.value)}}})])},staticRenderFns:[]};var R={components:{SocialItem:F,SocialParser:n("VU/8")(A,U,!1,function(t){n("SYTW")},"data-v-6bc262d6",null).exports,EditableInput:B},name:"SocialColumn",props:{index:"",content:{default:null},header:{default:""},width:{default:0}},data:function(){return{}},computed:{widthItem:function(){return this.width-20}}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"socialColumn",style:{width:t.width+"px"}},[n("div",{staticClass:"header"},[n("editable-input",{attrs:{type:"input",placeholder:"Rubrik",tag:"h2"},model:{value:t.content.header,callback:function(e){t.$set(t.content,"header",e)},expression:"content.header"}})],1),t._v(" "),t.content.items.length>0?n("div",{staticClass:"items"},t._l(t.content.items,function(e){return n("social-item",{staticClass:"item",attrs:{content:e,width:t.widthItem}})})):t._e(),t._v(" "),n("social-parser",{staticClass:"addItem",attrs:{column:t.index}})],1)},staticRenderFns:[]};var V={components:{SocialColumn:n("VU/8")(R,N,!1,function(t){n("jYBw")},"data-v-345aee96",null).exports,EditableInput:B},name:"SocialTheme",props:{content:""},data:function(){return{test:"testar"}},methods:{},mounted:function(){}},W={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"socialTheme"},[n("div",{staticClass:"topSection"},[n("div",{staticClass:"header"},[n("editable-input",{staticClass:"underline",attrs:{type:"input",placeholder:"Rubrik",tag:"h1"},model:{value:t.content.header,callback:function(e){t.$set(t.content,"header",e)},expression:"content.header"}})],1),t._v(" "),n("p",{staticClass:"description"},[n("editable-input",{attrs:{type:"textarea",placeholder:"Beskrivning",tag:"span"},model:{value:t.content.description,callback:function(e){t.$set(t.content,"description",e)},expression:"content.description"}})],1)]),t._v(" "),n("div",{staticClass:"columns"},t._l(t.content.columns,function(t,e){return n("social-column",{staticClass:"column",attrs:{width:"450",content:t,index:e}})})),t._v(" "),n("div",{staticClass:"bottomSection"},[n("p",{staticClass:"creator"},[t._v("\n      Jämförelsen "),n("i",[t._v(t._s(t.content.header))]),t._v(" är skapad av besökare till Ekokammaren.\n      "),n("br"),t._v("\n      Ekokammaren ansvarar ej för dess innehåll eller uttryckta åsikter.\n    ")])])])},staticRenderFns:[]};var Y=n("VU/8")(V,W,!1,function(t){n("Ewe5")},"data-v-3b1f24f4",null).exports,q=n("9+MM"),J=n.n(q),K={components:{SocialTheme:Y},name:"Landing",data:function(){return{content:J.a}},computed:{idTheme:function(){return c.state.idSelectedTheme},theme:function(){return c.state.content}},mounted:function(){var t=this.$route.params.id?this.$route.params.id:0;c.commit("setSelectedThemeId",t),c.commit("setContent",this.content.themes[t]),c.commit("loadFacebookAPI"),c.commit("loadInstagramAPI"),c.commit("loadTwitterAPI")}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"landing"},[this.theme?e("social-theme",{attrs:{content:this.theme}}):this._e()],1)},staticRenderFns:[]};var H=n("VU/8")(K,M,!1,function(t){n("AGC/")},"data-v-dd6a9806",null).exports,O={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ws-instructions"},[e("h1",[this._v("Instruktioner")])])}]};n("VU/8")({components:{},name:"WsInstructions",data:function(){return{}},computed:{},mounted:function(){}},O,!1,function(t){n("G779")},"data-v-36f5b716",null).exports;a.a.use(r.a);var z=new r.a({mode:"history",routes:[{path:"/workshop/:id?",name:"Landing",component:H}]}),L=n("8+8L");a.a.config.productionTip=!1,a.a.use(L.a),new a.a({el:"#app",router:z,components:{App:i},template:"<App/>"})},PZsL:function(t,e){},SYTW:function(t,e){},Xzyr:function(t,e){},YZpU:function(t,e){},jYBw:function(t,e){},kuCO:function(t,e){},szSE:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8f9138f4773f7f28e949.js.map