<template>
  <section id="portfolio-details" class="portfolio-details">
    <div class="container" data-aos="fade-up">

      <div class="row">

        <div class="col-lg-8">
          <h2 class="portfolio-title">{{ $t('portfolio.title4') }}</h2>
            <img src="../../assets/portfolio/avis.jpg" class="img-fluid" alt="">
        </div>

        <div class="col-lg-4 portfolio-info">
          <h3>{{ $t('portfolio.PI') }}</h3>
          <ul>
            <li><strong>{{ $t('portfolio.cat') }}</strong>: {{ $t('portfolio.info') }}</li>
            <li><strong>{{ $t('portfolio.PD') }}</strong>: {{ $t('portfolio.nov') }}</li>
            <li><strong>{{ $t('portfolio.PU') }}</strong>: <a href="www.aviscomunaleforlimpopoli.it">{{ $t('portfolio.title4') }}</a></li>
          </ul>

        </div>

      </div>

    </div>
  </section>
</template>