<template>
  <div>
    <div class="headerdrop">
      <div>
        <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont icofont-navigation-menu"></i></button>
      </div>
    </div>
    <div id="header" class="d-flex flex-column justify-content-center header">
      <nav class="nav-menu">
        <div class="locale-switcher">
          <button class="flag" v-for="entry in languages" :key="entry.language" :id="entry.language" @click="changeLocale(entry.language)" >
            <div class="insider">
              <flag class="flagIn" :iso="entry.flag" />
            </div>
          </button>
        </div>
        <ul>
          <li class="active"><a href="#hero"><i class="bx bx-home"></i> <span>{{ $t("header.home") }}</span></a></li>
          <li><a href="#about"><i class="bx bx-user"></i> <span>{{ $t("header.about") }}</span></a></li>
          <li><a href="#skills"><i class="bx bx-network-chart"></i> <span>{{ $t("header.skills") }}</span></a></li>
          <li><a href="#resume"><i class="bx bx-file-blank"></i> <span>{{ $t("header.resume") }}</span></a></li>
          <li><a href="#portfolio"><i class="bx bx-book-content"></i> <span>{{ $t("header.portfolio") }}</span></a></li>
          <li><a href="#contact"><i class="bx bx-envelope"></i> <span>{{ $t("header.contact") }}</span></a></li>
        </ul>
      </nav>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      languages: [
          { flag: 'us', language: 'en'},
          { flag: 'it', language: 'it'}
      ]
    }
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      if(locale === 'it'){
        document.getElementById('en').style.opacity='1'
        document.getElementById(locale).style.opacity='0.5'
      }else{
        document.getElementById('it').style.opacity='1'
        document.getElementById(locale).style.opacity='0.5'
      }      
    }
  }
}
</script>

<style lang="sass">
@import './Header'
@import '../../../custom.css'
.flag
  padding: 8px
  border: 1px transparent
  background: transparent 
  font-size: 20px
  opacity: 1
  .insider
    max-width: 50%

.mobile-nav-toggle
  display: none

@media (max-width: 992px)
  .mobile-nav-toggle
    display: block
</style>

