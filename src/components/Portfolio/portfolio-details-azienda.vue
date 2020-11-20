<template>
  <section id="portfolio-details" class="portfolio-details">
    <div class="container" data-aos="fade-up">

      <div class="row">

        <div class="col-lg-8">
          <h2 class="portfolio-title">{{ $t('row.title3')}}</h2>
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
        </div>

        <div class="col-lg-4 portfolio-info">
          <h3>{{ $t('row.PI')}}</h3>
          <ul>
            <li><strong>{{ $t('row.cat')}}</strong>: {{ $t('row.title3')}}</li>
            <li><strong>{{ $t('row.PD')}}</strong>: {{ $t('row.mar')}}, 2019</li>
            <li><strong>{{ $t('row.PU')}}</strong>: <a href="https://www.azagrgiordanoemanuele.it/">{{ $t('row.title3')}}</a></li>
          </ul>

          <p>{{ $t('row.aim4')}}</p>
        </div>

      </div>

    </div>
  </section>
</template>