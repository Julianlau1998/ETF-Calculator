<template>
  <div>
        <slider
            id="startCapital"
            :label="'Start Capital'"
            :initialValueProp="1000"
            :min="0"
            :max="5000000"
            :step="100"
            @changed="setStartCapital"
        />
        <br>
        <br>
        <slider
            id="monthly"
            :label="'Monthly Payment'"
            :initialValueProp="100"
            :min="0"
            :max="7000"
            :step="10"
            @changed="setMonthly"
        />
        <br>
        <br>
        <slider
            id="years"
            :label="'Years'"
            :initialValueProp="10"
            :min="1"
            :max="70"
            :step="1"
            @changed="setYears"
        />
        <br>
        <br>
        <slider
            id="interest"
            :label="'Yearly Interest Rate'"
            :initialValueProp="5"
            :min="0"
            :max="50"
            :step="0.1"
            @changed="setInterest"
        />
        <br>
        <br>
        <br>
        <br>
        <h1 class="title is-3 is-primary">
            Final Capital:
            <br>
            <span class="is-fourth mt-6"> {{ endCapital }} </span>
        </h1>
  </div>
</template>

<script>
import slider from '@/components/Slider.vue'

export default {
    components: {
        slider
    },
    data () {
        return {
            startCapital: 0,
            monthly: 100,
            years: 10,
            interest: 5,
            capitalArray: [],
            yearsArray: []
        }
    },
    created () {
        this.startCapital = 1000
    },
    computed: {
        endCapital () {
            let current = this.startCapital
            let newValue = 0
            let percent = (((1/12) * this.interest) / 100) + 1
            if (this.interest === 0) percent = 1


            for (let i = 0; i < this.years * 12; i++) {
                newValue = (current + this.monthly) * percent
                current = newValue
            }
            return current !== Infinity ? (Math.round(current * 100)/100).toFixed(2) : NaN
        }
    },
    watch: {
        endCapital () {
            this.capitalArray = []
            this.yearsArray = []
            if (this.startCapital > 5000000 || this.monthly > 10000 || this.years > 200 || this.interest > 70) {
                this.$emit('change', {
                    capitalArray: this.capitalArray,
                    yearsArray: this.yearsArray
                })
                return
            }

            let current = this.startCapital
            let newValue = 0
            let percent = (((1/12) * this.interest) / 100) + 1
            if (this.interest === 0) percent = 1


            for (let i = 0; i < this.years * 12; i++) {
                newValue = (current + this.monthly) * percent
                current = newValue
                if (i%12 === 0) {
                    this.capitalArray.push((Math.round(current * 100)/100).toFixed(2))
                    this.yearsArray.push(i+1)
                }
            }
            this.$emit('change', {
                capitalArray: this.capitalArray,
                yearsArray: this.yearsArray
            })
        }
    },
    methods: {
        setStartCapital (val) {
            this.startCapital = val
        },
        setMonthly (val) {
            this.monthly = val
        },
        setYears (val) {
            this.years = val
        },
        setInterest (val) {
            this.interest = val
        }
    }
}
</script>