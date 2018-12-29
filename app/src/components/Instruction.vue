<template>
  <div class="component">

    <transition name="fade">
      <div v-if="active">

        <div class="content space-between">
          {{text}}
          <div v-if="hasSlots" @click="toggleInfo()" class="more">
            <span v-if="!showInfo">Mer info</span>
            <span v-if="showInfo">Dölj info</span>
          </div>
        </div>

        <transition name="fade">
          <div v-if="hasSlots && showInfo" class="slot">
            <slot>
            </slot>
          </div>
        </transition>

      </div>
    </transition>

  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      showInfo: false
    }
  },
  props: {
    text: "",
    active: {type: Boolean, default: true}
  },
  computed: {
    hasSlots: function () {
      return this.$slots.default;
    }
  },
  methods: {
    toggleInfo: function () {
      this.showInfo = !this.showInfo;
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>

.content{
  background: lightblue;
  padding: 10px;
}

.more{
  color: darkblue;
  cursor: pointer;
  font-size: smaller;
}

.slot{
  background: rgb(240,240,240);
  border: 2px solid lightblue;
  padding: 10px;
  font-size: smaller;
  word-wrap: break-word;
}

</style>
