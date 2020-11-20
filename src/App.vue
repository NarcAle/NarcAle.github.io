<template>
  <div id="app">
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

<style lang="sass">
#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: left
  color: #2c3e50
  
</style>