<template>
    <span class="slider-container mt-negative-5 mb-negative-5">
        <label :for="`numberInput-${label}`">
            {{ label }}: 
        </label>
        <br>
        <input
            :id="`numberInput-${label}`"
            class="numberInput mb-negative-5"
            v-model="value"
            type="number"
            :min="min"
            :max="max"
            @click="$emit('click')"
        />
        <!-- <br>
        <input
            v-model="value"
            type="range"
            id="length"
            :min="min"
            :max="max"
            :step="step"
        > -->
    </span>
</template>

<script>
export default {
    props: {
        initialValueProp: {
            type: Number,
            default: 0,
            required: true
        },
        min: {
            type: Number,
            default: 0,
            required: true
        },
        max: {
            type: Number,
            default: 10000,
            required: true
        },
        label: {
            type: String,
            default: "",
            required: true
        },
        step: {
            type: Number,
            default: 10,
            required: true
        }
    },
    data () {
        return {
            value: this.initialValueProp
        }
    },
    watch: {
        value (val) {
            this.$emit('changed', Number(val))
        }
    }
}
</script>