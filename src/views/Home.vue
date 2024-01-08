<template>
  <div>
      <div class="columns mt-4 is-desktop">
        <calculator
          class="column is-6-desktop mt-4"
          @change="createChart"
          @addClick="addClick"
        />
        <chart 
          class="column is-6-desktop"
          :key="capitalArray[capitalArray.length -1]"
          :capitalArray="capitalArray"
          :yearsArray="yearsArray"
        />
      </div>
  </div>
</template>

<script>
import calculator from '@/components/Calculator.vue'
import chart from '@/components/Chart.vue'

export default {
    components: {
      calculator,
      chart
    },
    data () {
        return {
            startCapital: 0,
            capitalArray: [],
            yearsArray: [],
            clicks: 0
        }
    },
    created () {
      this.clicks = parseInt(localStorage.getItem('clicks'))
      if(this.clicks == null || isNaN(this.clicks)) {
        this.clicks = 0
      }
    },
    computed: {
      iosLiteApp () {
        return window.webkit && window.webkit.messageHandlers
      }
    },
    methods: {
      createChart (data) {
        const yearsArray = []
        if (data.yearsArray.length > 20) {
          data.yearsArray.forEach((year, index) => {
            if (index % 5 === 0) {
              yearsArray.push(index)
            } else {
              yearsArray.push(' ')
            }
          })
        }
        this.capitalArray = []
        this.capitalArray = data.capitalArray
        this.yearsArray = yearsArray
      },
      addClick () {
        this.clicks += 1
        localStorage.setItem('clicks', this.clicks)
        if(this.clicks >= 8) {
          this.showInterstitial()
          localStorage.setItem('clicks', 0)
          this.clicks = 0
        }
      },
      showInterstitial () {
        if (this.iosLiteApp) {
          window.webkit.messageHandlers.showInterstitial.postMessage({
            "message": 'showInterstitial'
          })
        }
      }
    }
}

</script>