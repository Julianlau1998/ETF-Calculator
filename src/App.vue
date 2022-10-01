<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        iOS: false
      }
    },
    created () {
      this.iOS = [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    this.$store.state.iOS = this.iOS
    }
  }
</script>