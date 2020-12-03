<template>
  <section id="portfolio-details" class="portfolio-details">
    <div class="container" data-aos="fade-up">

      <div class="row">
        <div class="col-lg-8">
          <h2 class="portfolio-title">{{ $t('portfolio.title2') }} </h2>
            <img src="../../assets/portfolio/ecoAss.jpg" class="img-fluid" alt="">
        </div>

        <div class="col-lg-4 portfolio-info">
          <h3>{{ $t('portfolio.PI') }}</h3>
          <ul>
            <li><strong>{{ $t('portfolio.cat') }}</strong>: {{ $t('portfolio.title2') }}</li>
            <li><strong>{{ $t('portfolio.PD') }}</strong>: {{ $t('portfolio.mar') }}</li>
            <li><strong>{{ $t('portfolio.PU') }}</strong>: <a href="https://nutritional-assistant.herokuapp.com/">{{ $t('portfolio.title2') }}</a></li>
          </ul>

          <p>
          {{ $t('portfolio.aim3') }}
          </p>
        </div>

      </div>

    </div>
  </section>

</template>