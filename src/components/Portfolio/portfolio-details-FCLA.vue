<template>
  <section id="portfolio-details" class="portfolio-details">
    <div class="container" data-aos="fade-up">

      <div class="row">

        <div class="col-lg-8">
          <h2 class="portfolio-title">{{ $t('portfolio.title6') }}</h2>
            <img src="../../assets/portfolio/FCLA.jpg" class="img-fluid" alt="">
        </div>

        <div class="col-lg-4 portfolio-info">
          <h3>{{ $t('portfolio.PI') }}</h3>
          <ul>
            <li><strong>{{ $t('portfolio.cat') }}</strong>: {{ $t('portfolio.info3') }}</li>
            <li><strong>{{ $t('portfolio.PD') }}</strong>: {{ $t('portfolio.mag2') }}</li>
            <li><strong>{{ $t('portfolio.PU') }}</strong>: <a href="https://github.com/nlasagni/fausto-coppi-lab-automation">{{ $t('portfolio.title6') }}</a></li>
          </ul>

        </div>

      </div>

    </div>
  </section>
</template>