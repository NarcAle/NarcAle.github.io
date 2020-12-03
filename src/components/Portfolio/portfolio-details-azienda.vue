<template>
  <section id="portfolio-details" class="portfolio-details">
    <div class="container" data-aos="fade-up">
      <div class="row">
        <div class="col-lg-8">
          <h2 class="portfolio-title">{{ $t('portfolio.title3')}}</h2>
          <div class="portfolio-details-carousel">
            <b-carousel
              id="carousel-1"
                :interval="4000"
                indicators
                controls
                fade
                background="#ababab"
                img-width="1024"
                img-height="1024"
                style="text-shadow: 1px 1px 2px #333;"
            >
              <b-carousel-slide>
                <template #img>
                  <img
                    class="d-block img-fluid w-100 hoverImg"
                    width="0"
                    height="0"
                    src="../../assets/portfolio/aziendaAgricola.png"
                    alt="image slot"
                  >
                </template>
              </b-carousel-slide>
              <b-carousel-slide>
                <template #img>
                  <img
                    class="d-block img-fluid w-100"
                    width="0"
                    height="0"
                    src="../../assets/portfolio/azienda2.png"
                    alt="image slot"
                  >
                </template>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </div>
        <div class="col-lg-4 portfolio-info">
          <h3>{{ $t('portfolio.PI')}}</h3>
          <ul>
            <li><strong>{{ $t('portfolio.cat')}}</strong>: {{ $t('portfolio.title3')}}</li>
            <li><strong>{{ $t('portfolio.PD')}}</strong>: {{ $t('portfolio.mar')}}, 2019</li>
            <li><strong>{{ $t('portfolio.PU')}}</strong>: <a href="https://www.azagrgiordanoemanuele.it/">{{ $t('portfolio.title3')}}</a></li>
          </ul>

          <p>{{ $t('portfolio.aim4')}}</p>
        </div>

      </div>

    </div>
  </section>
</template>