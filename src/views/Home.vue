<template>
  <div>
      <topNav />
      <div class="columns mt-4 is-vcentered is-desktop">
        <calculator
          class="column is-6-desktop"
          @change="createChart"
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
import topNav from '@/components/TopNav.vue'
import calculator from '@/components/Calculator.vue'
import chart from '@/components/Chart.vue'

export default {
    components: {
      topNav,
      calculator,
      chart
    },
    data () {
        return {
            startCapital: 0,
            capitalArray: [],
            yearsArray: []
        }
    },
    methods: {
      createChart (data) {  
        this.capitalArray = []
        this.capitalArray = data.capitalArray
        this.yearsArray = data.yearsArray
      }
    }
}

</script>