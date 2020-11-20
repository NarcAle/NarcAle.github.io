<template>
  <div id="app">
    <div class="locale-switcher">
      <b-select v-model="$i18n.locale" size="sm" style="width:10%">
        <option value="en">
          <div>
            <img class="localeFlag" src="./assets/flags/en.svg" alt="flag"> 
            <span>{{ $t('locale-switcher.en') }}</span>
          </div>
        </option>
        <option value="it">
          <img class="localeFlag" src="@/assets/flags/it.svg" alt="flag"> {{ $t('locale-switcher.it')}}
        </option>
      </b-select>
    </div>
    <Main />
    <Footer />
  </div>
</template>

<script>
const localeFlagsContext = require.context('@/assets/flags/', false);
const localeFlagsExt = '.svg';
import Main from '../src/components/Main.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Main,
    Footer
  },
  methods: {
    getLocaleFlagPath(lang) {
      return localeFlagsContext(`./${lang}${localeFlagsExt}`);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  .locale-switcher {
    background-color: #ECF9F7;
    display: flex;
    padding: 2%;
    justify-content: flex-end;
  }
}
</style>
