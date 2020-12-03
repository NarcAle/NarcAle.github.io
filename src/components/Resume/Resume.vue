<template id="main">
  <section id="resume" class="resume">
  <div class="container" data-aos="fade-up">

    <div class="section-title">
      <h2>{{ $t('section-title.resume') }}</h2>
      <p>{{ $t('section-title.resumeMe') }}</p>
    </div>

    <div class="row">

      <div id="contentResume" class="col-lg-6">
        <h3 class="resume-title">{{ $t('contentResume.summary') }}</h3>
        <div class="resume-item pb-0">
          <h4>{{ $t('row.name') }}</h4>
          <p><em></em></p>
          <ul>
            <li>{{ $t('row.myCity') }}</li>
            <li>{{ $t('row.myPhone') }}</li>
            <li>{{ $t('row.myMail') }}</li>
          </ul>
        </div>
        <h3 class="resume-title">{{ $t('contentResume.education') }}</h3>
        <div class="resume-item">
          <h4>{{ $t('contentResume.diploma') }}</h4>
          <h5>{{ $t('contentResume.dateDiploma') }}</h5>
          <p><em>{{ $t('contentResume.it') }}</em></p>
          <p>{{ $t('contentResume.apprendimento') }}</p>
          <p>{{ $t('contentResume.soggiorni') }}</p>
        </div>
        <div class="resume-item">
          <h4>{{ $t('contentResume.BSc') }}</h4>
          <h5>{{ $t('contentResume.dateBSc') }}</h5>
          <p><em>{{ $t('contentResume.uni') }}</em></p>
          <p>{{ $t('contentResume.during') }} </p>
          <ul>
            <li>{{ $t('contentResume.concurrent') }}</li>
            <li>{{ $t('contentResume.alg') }}</li>
            <li>{{ $t('contentResume.oop') }}</li>
            <li>{{ $t('contentResume.os') }}</li>
            <li>{{ $t('contentResume.db') }}</li>
            <li>{{ $t('contentResume.web') }}</li>
            <li>{{ $t('contentResume.ricerca') }}</li>
            <li>{{ $t('contentResume.ingSW') }}</li>
            <li>{{ $t('contentResume.reti') }}</li>
            <li>{{ $t('contentResume.android') }}</li>
            <li>{{ $t('contentResume.emb') }}</li>
          </ul>
          <p>{{ $t('contentResume.lang') }}</p>
          <ul>
            <li>{{ $t('contentResume.C') }}</li>
            <li>{{ $t('contentResume.Java') }}</li>
            <li>{{ $t('contentResume.HTML5') }}</li>
            <li>{{ $t('contentResume.prog') }}</li>
          </ul>
        </div>
        <div class="resume-item">
          <h4>{{ $t('contentResume.MSc') }}</h4>
          <h5>{{ $t('contentResume.dateMSc') }}</h5>
          <p><em>{{ $t('contentResume.uni') }}</em></p>
          <p>{{ $t('contentResume.durMs') }}</p>
          <ul>
            <li>{{ $t('contentResume.ML') }}</li>
            <li>{{ $t('contentResume.NS') }}</li>
            <li>{{ $t('contentResume.PCD') }}</li>
            <li>{{ $t('contentResume.PPS') }}</li>
            <li>{{ $t('contentResume.spa') }}</li>
          </ul>
          <p>{{ $t('contentResume.lang') }}</p>
          <ul>
            <li>{{ $t('contentResume.scala') }}</li>
            <li>{{ $t('contentResume.prolog') }}</li>
            <li>{{ $t('contentResume.kotlin') }}</li>
          </ul>
        </div>
      </div>
    
      <div class="col-lg-6">
        <h3 class="resume-title">{{ $t('contentResume.professional') }}</h3>
        <div class="resume-item">
          <h4>{{ $t('contentResume.freelancer') }}</h4>
          <h5>{{ $t('contentResume.present') }}</h5>
          <p><em> {{ $t('row.myCity') }}</em></p>
          <ul>
            <li>{{ $t('contentResume.webDev') }}</li>
            <li>{{ $t('contentResume.proj') }}</li>
          </ul>
        </div>
        <div class="resume-item">
          <h4>{{ $t('contentResume.tirocinio') }}</h4>
          <h5>{{ $t('contentResume.dateTiroc') }}</h5>
          <p><em>{{ $t('contentResume.whereTir') }}</em></p>
          <ul>
            <li>{{ $t('contentResume.QR') }}</li>
            <li>{{ $t('contentResume.scan') }}</li>
          </ul>
        </div> 
        <div class="resume-item">
          <h4>{{ $t('contentResume.SWD') }}</h4>
          <h5>{{ $t('contentResume.dateSWD') }}</h5>
          <p><em>{{ $t('contentResume.whereSWD') }}</em></p>
          <ul>
            <li>{{ $t('contentResume.sw1') }} <a href="https://www.tulipsmarket.com/citta/cesena">{{ $t('contentResume.nameTulips') }}</a> {{ $t('contentResume.sw2') }}</li>
            <li>{{ $t('contentResume.learned') }}</li>
          </ul>
        </div>
        <div class="resume-item">
          <h4>{{ $t('contentResume.front') }}</h4>
          <h5>{{ $t('contentResume.dateFront') }}</h5>
          <p><em>{{ $t('contentResume.whereFront') }}</em></p>
          <ul>
            <li>{{ $t('contentResume.dev') }} <a href="https://www.cosmobile.com/ita/">{{ $t('contentResume.nameCosmobile') }}</a> {{ $t('contentResume.site') }}.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style lang="sass">
@import './Resume'
</style>