<template>
  <section id="skills" class="skills section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>{{ $t('section-title.skills')}}</h2>
        <p>{{ $t('section-title.what') }}</p>
      </div>
      <div class="row skills-content">
        <div class="col-lg-6">
          <div class="progress">
            <SkillBar skill="HTML" level="100" />
            <!--<span class="skill">HTML <i class="val">100%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>-->
          </div>
          <div class="progress">
            <SkillBar skill="CSS" level="100" />
          </div>
          <div class="progress">
            <SkillBar skill="JavaScript" level="90" />
          </div>   
          <div class="progress">
            <SkillBar skill="Android" level="85" />
          </div>
          <div class="progress">
            <SkillBar skill="Prolog" level="85" />
          </div>
        </div>

        <div class="col-lg-6">
          <div class="progress">
            <SkillBar skill="PHP" level="90" />
          </div>
          <div class="progress">
            <SkillBar skill="Java" level="90" />
          </div>
          <div class="progress">
            <SkillBar skill="Scala" level="85" />
          </div>
          <div class="progress">
            <SkillBar skill="Kotlin" level="85" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import SkillBar from './SkillBar.vue'
export default {
  components: {
    SkillBar
  },
}
</script>

<style lang="sass">
@import './SkillBar.sass'
</style>