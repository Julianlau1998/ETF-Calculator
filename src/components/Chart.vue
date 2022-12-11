<template>
    <div class="mt-6" id="chart">
        <apexchart type="line" height="350" :options="chartOptions" :series="series" />
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    components: {
      apexchart: VueApexCharts,
    },
    props: {
        capitalArray: {
            type: Array,
            default: () => [],
            required: true
        },
        yearsArray: {
            type: Array,
            default: () => [],
            required: true
        }
    },
    data () {
        return {
            series: [{
                name: "Capital",
                data: this.capitalArray
            }],
            chartOptions: {
                chart: {
                    height: 550,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: false
                    },
                    foreColor: '#cbe5ff',
                    animations: {
                        enabled: true,
                        easing: 'easeinout',
                        speed: 800,
                        animateGradually: {
                            enabled: true,
                            delay: 150
                        },
                        dynamicAnimation: {
                            enabled: true,
                            speed: 50
                        }
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: this.$t('calculator.growth'),
                    align: 'left'
                    },
                    grid: {
                    row: {
                        colors: ['#2a343c', '#2a343c'], // takes an array which will be repeated on columns
                        opacity: 1
                    },
                },
                xaxis: {
                    categories: this.yearsArray,
                }
            }
        }
    }
}
</script>

<style>

</style>