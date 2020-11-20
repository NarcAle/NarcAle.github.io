<template>
  <div>
    <Hero />
    <div id="main">
      <Header />
      <About />
      <Skills />
      <Resume />
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
import Contact from './Contact/Contact.vue'
export default {
  data() {
    return {
      
    }
  },
  components: {
    Header,
    Hero,
    About,
    Skills,
    Resume,
    Contact
  }
}
</script>