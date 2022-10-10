<template>
  <div id="app">
    <topNav />
    <router-view/>
  </div>
</template>

<script>
  import topNav from '@/components/TopNav.vue'
  export default {
    components: {
      topNav
    },
    data () {
      return {
        iOS: false,
        selectedLanguage: ''
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

      this.selectedLanguage = localStorage.getItem('language')
      if (this.selectedLanguage) {
        this.selectedLanguage = JSON.parse(this.selectedLanguage)
      } else {
        this.selectedLanguage = ''
      }
    },
    watch: {
      selectedLanguage (val) {
        this.$i18n.locale = val
        localStorage.setItem('language', JSON.stringify(val))
      }
    }
  }
</script>