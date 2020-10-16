<template>
  <div class="about">
    <h1 @click="changeOld">桃花剑仙邓太阿{{seeTimes}}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'seeTimes'
    ])
  },
  created () {
  },
  methods: {
    changeOld () {
      this.$store.dispatch('change_number', 456)
    }
  }
}
</script>
