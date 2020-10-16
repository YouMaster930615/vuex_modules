<template>
  <div class="home">
    <h2 @click="findNumber">扶摇上青天{{seeTimes}}</h2>
    <h3>{{sex}}</h3>
  </div>
</template>

<script>

import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      age: 12
    }
  },
  computed: {
    ...mapGetters([
      'seeTimes'
    ]),
    ...mapState([
      'sex'
    ])
  },
  created () {
  },
  methods: {
    findNumber () {
      this.$store.dispatch('change_number', 456)
    }
  }
}
</script>
