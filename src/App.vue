<template>
  <div id="app">
    <Main />
    <Footer />
  </div>
</template>

<script>
import Main from '../src/components/Main.vue'
import Footer from './components/Footer/Footer.vue'
export default {
  name: 'App',
  components: {
    Main,
    Footer
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