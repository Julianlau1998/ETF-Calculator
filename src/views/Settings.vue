<template>
  <div class="settings-page">
    <div class="is-settings-box">
        <h1 class="header is-size-2 is-size-3-mobile mt-5 mb-5">
            {{ $t('settings.title') }}
        </h1>
        <div class="columns is-justify-content-center is-mobile is-align-items-center mt-3">
            <div class="column is-3-desktop is-4-tablet is-5-mobile">
                <div class="is-size-4">
                    {{ $t('settings.currency') }}
                </div>
            </div>
            <div class="column is-3-desktop is-4-tablet is-5-mobile">
                <select class="select" v-model="currency">
                    <option value="">
                        -
                    </option>
                    <option value="€">
                        {{ $t('settings.currencies.euro') }}
                    </option>
                    <option value="$" default>
                        {{ $t('settings.currencies.dollar') }}
                    </option>
                    <option value="£">
                        {{ $t('settings.currencies.pound') }}
                    </option>
                </select>
            </div>
        </div>

        <div class="columns is-justify-content-center is-mobile is-align-items-center mb-6 mt-4">
            <div class="column is-3-desktop is-4-tablet is-5-mobile">
                <div class="is-size-4">
                    {{ $t('settings.language') }}
                </div>
            </div>
            <div class="column is-3-desktop is-4-tablet is-5-mobile">
                <select
                    v-model="selectedLanguage"
                    class="select"
                    id="language"
                >
                    <option
                    v-for="(lang, i) in langs" :key="`Lang${i}`"
                    :value="lang"
                    >
                        {{ lang }}
                    </option>
                </select>
            </div>
        </div>
    </div>
    <button @click="home" class="button is-primary is-home-button mt-6">
        {{ $t('settings.home') }}
    </button>
  </div>
</template>

<script>
export default {
    data () {
        return {
            currency: '',
            language: '',
            langs: ['English', 'German'],
            selectedLanguage: ''
        }
    },
    created () {
        const localCurrency = localStorage.getItem('currency')
        if (localCurrency) {
            this.currency = JSON.parse(localCurrency)
        }
        this.selectedLanguage = localStorage.getItem('language')
        if (this.selectedLanguage) {
          this.selectedLanguage = JSON.parse(this.selectedLanguage)
        } else {
          this.selectedLanguage = ''
        }
    },
    watch: {
        currency (val) {
            localStorage.setItem('currency', JSON.stringify(val))
        },
        selectedLanguage (val) {
          this.$i18n.locale = val
          localStorage.setItem('language', JSON.stringify(val))
        }
    },
    methods: {
        home () {
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>