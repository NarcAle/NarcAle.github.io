<template>
  <section id="skills" class="skills section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>{{ $t('section-title.skills')}}</h2>
        <p>{{ $t('section-title.what') }}</p>
      </div>
      <div class="row skills-content">
        <div class="col-lg-6">
          <div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
            <div class="progress">
              <SkillBar v-if="skillBarVisible === true" class="skillBar" skill="HTML" level="100" />
            </div>
            <div class="progress">
              <SkillBar v-if="skillBarVisible === true" class="skillBar" skill="CSS" level="100" />
            </div>
            <div class="progress">
              <SkillBar v-if="skillBarVisible === true" class="skillBar" skill="JavaScript" level="90" />
            </div>   
            <div class="progress">
              <SkillBar v-if="skillBarVisible === true" class="skillBar" skill="Android" level="85" />
            </div>
            <div class="progress">
              <SkillBar v-if="skillBarVisible === true" class="skillBar" skill="Prolog" level="85" />
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
            <div class="progress">
              <SkillBar v-if="skillBarVisible === true" skill="PHP" level="90" />
            </div>
            <div class="progress">
              <SkillBar v-if="skillBarVisible === true" skill="Java" level="90" />
            </div>
            <div class="progress">
              <SkillBar v-if="skillBarVisible === true" skill="Scala" level="85" />
            </div>
            <div class="progress">
              <SkillBar v-if="skillBarVisible === true" skill="Kotlin" level="85" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import SkillBar from './SkillBar.vue'
export default {
  data() {
    return {
      skillBarVisible: false,
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1],
        offset: '80%'
      }
    }
  },
  components: {
    SkillBar
  },
  methods: {
    onWaypoint ({ going, direction }) {
      if (going === this.$waypointMap.GOING_OUT && this.skillBarVisible) {
        this.skillBarVisible = false
      } else if (going === this.$waypointMap.GOING_IN && !this.skillBarVisible) {
        this.skillBarVisible = true
      }
    }
  }
}
</script>

<style lang="sass">
@import './SkillBar.sass'
</style>
