<template>
  <section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>{{ $t('hero.name') }}</h1>
      <vue-typed-js class="typedElem" :strings="['Web Developer', 'Software Developer', 'Programmer', 'Freelancer']" 
        :loop="true"
        :typeSpeed= "100"
        :backSpeed= "50"
        :backDelay= "2000">
        <p> {{ $t('hero.im') }} <span class="typed typing"></span></p>
      </vue-typed-js>
      <div class="social-links">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="https://www.facebook.com/alessia.cerami.21/" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="https://www.instagram.com/narcale/" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="https://www.linkedin.com/in/alessia-cerami-197006100/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </section>
</template>

<style lang="sass">
.typedElem
  display: block !important
  align-items: unset !important
</style>