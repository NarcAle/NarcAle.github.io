<template>
  <section id="portfolio-details" class="portfolio-details">
    <div class="container" data-aos="fade-up">

      <div class="row">

        <div class="col-lg-8">
          <h2 class="portfolio-title">{{ $t('portfolio.title5') }}</h2>
            <img src="../../assets/portfolio/fool.jpg" class="img-fluid" alt="">
        </div>

        <div class="col-lg-4 portfolio-info">
          <h3>{{ $t('portfolio.PI') }}</h3>
          <ul>
            <li><strong>{{ $t('portfolio.cat') }}</strong>: {{ $t('portfolio.info2') }}</li>
            <li><strong>{{ $t('portfolio.PD') }}</strong>: {{ $t('portfolio.mag') }}</li>
            <li><strong>{{ $t('portfolio.PU') }}</strong>: <a href="https://github.com/NarcAle/FOOL">{{ $t('portfolio.title5') }}</a></li>
          </ul>

        </div>

      </div>

    </div>
  </section>
</template>