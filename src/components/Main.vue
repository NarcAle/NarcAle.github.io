<template>
  <div>
    <Hero />
    <div id="main">
      <Header />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
    
  </div>
</template>

<script>
import Header from './Header/Header.vue'
import Hero from './Hero/Hero.vue'
import About from './About/About.vue'
import Skills from './Skills/Skills.vue'
import Resume from './Resume/Resume.vue'
import Portfolio from './Portfolio/Portfolio.vue'
import Contact from './Contact/Contact.vue'
export default {
  components: {
    Header,
    Hero,
    About,
    Skills,
    Resume,
    Portfolio,
    Contact
  }
}
</script>