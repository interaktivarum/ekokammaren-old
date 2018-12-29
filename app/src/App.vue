<template>
  <div id="app">
    <e-header id="headerview" class="hideInPrint"></e-header>
    <router-view id="routerview"/>
    <e-footer id="footerview" class="hideInPrint"></e-footer>
  </div>
</template>

<script>

import { store } from '@/store';

import EHeader from '@/components/views/EHeader'
import EFooter from '@/components/views/EFooter'

export default {
  components:{
    EHeader,
    EFooter
  },
  name: 'App',
}

</script>

<style>
  @import '/assets/style/style.css';
  @import '/assets/style/fonts.css';
  @import '/assets/style/screens.css';
  @import '/assets/style/form.css';
  @import '/assets/style/animations.css';
  @import "vue-swatches/dist/vue-swatches.min.css"
</style>
