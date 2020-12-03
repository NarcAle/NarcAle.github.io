
<template>
  <section id="portfolio-details" class="portfolio-details">
    <div class="container" data-aos="fade-up">
      <div class="row">
        <div class="col-lg-8">
          <h2 class="portfolio-title">{{ $t('portfolio.risiko') }} </h2>
            <img src="../../assets/portfolio/risiko.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-lg-4 portfolio-info">
          <h3>{{ $t('portfolio.PI') }}</h3>
          <ul>
            <li><strong>{{ $t('portfolio.cat') }}</strong>: {{ $t('portfolio.GMO') }}</li>
            <li><strong>{{ $t('portfolio.PD') }}</strong>: {{ $t('portfolio.sept') }}</li>
            <li><strong>{{ $t('portfolio.PU') }}</strong>: <a href="https://riskala.herokuapp.com/game">{{ $t('portfolio.risiko') }}</a></li>
          </ul>
          <p>{{ $t('portfolio.aim') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>