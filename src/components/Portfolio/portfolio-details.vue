
<template>
  <section id="portfolio-details" class="portfolio-details">
    <div class="container" data-aos="fade-up">
      <div class="row">
        <div class="col-lg-8">
          <h2 class="portfolio-title">Riskala </h2>
            <img src="../../assets/portfolio/risiko.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-lg-4 portfolio-info">
          <h3>{{ $t('row.PI') }}</h3>
          <ul>
            <li><strong>{{ $t('row.cat') }}</strong>: {{ $t('row.GMO') }}</li>
            <li><strong>{{ $t('row.PD') }}</strong>: {{ $t('row.sept') }}, 2020</li>
            <li><strong>{{ $t('row.PU') }}</strong>: <a href="https://riskala.herokuapp.com/game">Riskala</a></li>
          </ul>
          <p>{{ $t('row.aim') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>