<template id="main">
  <section id="resume" class="resume">
  <div class="container" data-aos="fade-up">

    <div class="section-title">
      <h2>{{ $t('section-title.resume') }}</h2>
      <p>{{ $t('section-title.resumeMe') }}</p>
    </div>

    <div class="row">

      <div class="col-lg-6">
        <h3 class="resume-title">{{ $t('row.summary') }}</h3>
        <div class="resume-item pb-0">
          <h4>Alessia Cerami</h4>
          <p><em></em></p>
          <ul>
            <li>Forlimpopoli, FC, 47034</li>
            <li>(+39) 329 4735359</li>
            <li>ceramialessia@gmail.com</li>
          </ul>
        </div>
        <h3 class="resume-title">{{ $t('row.education') }}</h3>
        <div class="resume-item">
          <h4>{{ $t('row.diploma') }}</h4>
          <h5>2009 - 2014</h5>
          <p><em>Liceo Classico "GB. Morgagni", Forlì ({{ $t('row.it') }})</em></p>
          <p>{{ $t('row.apprendimento') }}</p>
          <p>{{ $t('row.soggiorni') }}</p>
        </div>
        <div class="resume-item">
          <h4>{{ $t('row.BSc') }}</h4>
          <h5>2014 - 2017</h5>
          <p><em>{{ $t('row.uni') }}</em></p>
          <p>{{ $t('row.during') }} </p>
          <ul>
            <li>{{ $t('row.concurrent') }}</li>
            <li>{{ $t('row.alg') }}</li>
            <li>{{ $t('row.oop') }}</li>
            <li>{{ $t('row.os') }}</li>
            <li>{{ $t('row.db') }}</li>
            <li>{{ $t('row.web') }}</li>
            <li>{{ $t('row.ricerca') }}</li>
            <li>{{ $t('row.ingSW') }}</li>
            <li>{{ $t('row.reti') }}</li>
            <li>{{ $t('row.android') }}</li>
            <li>{{ $t('row.emb') }}</li>
          </ul>
          <p>{{ $t('row.lang') }}</p>
          <ul>
            <li>C </li>
            <li>Java </li>
            <li>HTML5, CSS3, Bootstrap, PHP </li>
            <li>{{ $t('row.prog') }}</li>
          </ul>
        </div>
        <div class="resume-item">
          <h4>{{ $t('row.MSc') }}</h4>
          <h5>2018 - 2021</h5>
          <p><em>{{ $t('row.uni') }}</em></p>
          <p>{{ $t('row.durMs') }}</p>
          <ul>
            <li>{{ $t('row.ML') }}</li>
            <li>{{ $t('row.NS') }}</li>
            <li>{{ $t('row.PCD') }}</li>
            <li>{{ $t('row.PPS') }}</li>
            <li>{{ $t('row.spa') }}</li>
          </ul>
          <p>{{ $t('row.lang') }}</p>
          <ul>
            <li>Scala </li>
            <li>Prolog </li>
            <li>Kotlin </li>
          </ul>
        </div>
      </div>
    
      <div class="col-lg-6">
        <h3 class="resume-title">{{ $t('row.professional') }}</h3>
        <div class="resume-item">
          <h4>{{ $t('row.freelancer') }}</h4>
          <h5>2014 - {{ $t('row.present') }}</h5>
          <p><em>Forlimpopoli, FC, 47034 </em></p>
          <ul>
            <li>{{ $t('row.webDev') }}</li>
            <li>{{ $t('row.proj') }}</li>
          </ul>
        </div>
        <div class="resume-item">
          <h4>{{ $t('row.tirocinio') }}</h4>
          <h5>2017</h5>
          <p><em>Alexide, Cesena, FC</em></p>
          <ul>
            <li>{{ $t('row.QR') }}</li>
            <li>{{ $t('row.scan') }}</li>
          </ul>
        </div> 
        <div class="resume-item">
          <h4>{{ $t('row.SWD') }}</h4>
          <h5>01/2018 - 08/2018</h5>
          <p><em>Lab 51, Cesena, FC</em></p>
          <ul>
            <li>{{ $t('row.sw1') }} <a href="https://www.tulipsmarket.com/citta/cesena">Tulips </a> {{ $t('row.sw2') }}</li>
            <li>{{ $t('row.learned') }}</li>
          </ul>
        </div>
    
        <div class="resume-item">
          <h4>{{ $t('row.front') }}</h4>
          <h5>01/2018 - 08/2019</h5>
          <p><em>Cosmobile, Forlì, FC</em></p>
          <ul>
            <li>{{ $t('row.dev') }} <a href="https://www.cosmobile.com/ita/">Cosmobile</a> {{ $t('row.site') }}.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
</template>