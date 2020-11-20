<template>
  <section id="skills" class="skills section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Skills</h2>
        <p>During my universitary study, I practiced different languages. Some of them linked to site web and others linked to develop applications.</p>
      </div>

      <div class="row skills-content">
        <div class="col-lg-6">
          <div v-for="(skill,index) in skills" :key="index">
            <span class="lang">{{skill.lang}} <i class="val"> {{skill.percent}}%</i></span>
            <div class="bar">
              <div class="progress" v-bind:style = "{'background':skill.color, 'width':skill.percent+'%'}"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <!--<div class="row skills-content">

        <div class="col-lg-6">
          <skill-bar barSize="small" skill="CSS" :level="level" />
          <div class="progress">
            <span class="skill">HTML <i class="val">100%</i></span>

            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">CSS <i class="val">100%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">JavaScript <i class="val">90%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
    
          <div class="progress">
            <span class="skill">Android <i class="val">85%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" value="85" aria-valuemin="0" max="100"></div>
            </div>
          </div>
      
          <div class="progress">
            <span class="skill">Prolog <i class="val">85%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        
        </div>-->

        <!--<div class="col-lg-6">

          <div class="progress">
            <span class="skill">PHP <i class="val">90%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">Java <i class="val">90%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">Scala <i class="val">85%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        
          <div class="progress">
            <span class="skill">Kotlin <i class="val">85%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

        </div>
    

      </div>

    </div>-->


  </section>
</template>

<script>
//import { SkillBar } from 'vue-skill-bar'
export default {
  data() {
    return {
      skills:[
        {lang:"HTML5",	percent:90, color:"#0288d1"},
        {lang:"CSS3", percent:76, color:"#0288d1"},
        {lang:"JAVASCRIPT", percent:84, color:"#0288d1"},
        {lang:"MATERIALIZE",	percent:94, color:"#0288d1"},
        {lang:"VUE",	percent:93, color:"#0288d1"},
        {lang:"MONGODB", percent:87, color:"#0288d1"}
      ]
    }
  },
  /*components: {
    'skill-bar': SkillBar
  },*/
}
</script>