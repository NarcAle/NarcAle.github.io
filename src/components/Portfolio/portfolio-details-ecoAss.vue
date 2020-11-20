<template>
  <section id="portfolio-details" class="portfolio-details">
    <div class="container" data-aos="fade-up">

      <div class="row">
        <div class="col-lg-8">
          <h2 class="portfolio-title">{{ $t('row.title2') }} </h2>
            <img src="../../assets/portfolio/ecoAss.jpg" class="img-fluid" alt="">
        </div>

        <div class="col-lg-4 portfolio-info">
          <h3>{{ $t('row.PI') }}</h3>
          <ul>
            <li><strong>{{ $t('row.cat') }}</strong>: {{ $t('row.title2') }}</li>
            <li><strong>{{ $t('row.PD') }}</strong>: {{ $t('row.mar') }}, 2020</li>
            <li><strong>{{ $t('row.PU') }}</strong>: <a href="https://nutritional-assistant.herokuapp.com/">EcoAssistant</a></li>
          </ul>

          <p>
          {{ $t('row.aim3') }}
          </p>
        </div>

      </div>

    </div>
  </section>

</template>