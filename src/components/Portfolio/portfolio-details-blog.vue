<template>
  <section id="portfolio-details" class="portfolio-details">
    <div class="container" data-aos="fade-up">
      <div class="row">
        <div class="col-lg-8">
          <h2 class="portfolio-title">{{ $t('row.title')}} </h2>
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
                      src="../../assets/portfolio/blog-1.jpg"
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
                      src="../../assets/portfolio/blog-2.jpg"
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
                      src="../../assets/portfolio/blog-3.jpg"
                      alt="image slot"
                    >
                  </template>
                </b-carousel-slide>
              </b-carousel>
          </div>
        </div>
        <div class="col-lg-4 portfolio-info">
          <h3>{{ $t('row.PI')}}</h3>
          <ul>
            <li><strong>{{ $t('row.cat')}}</strong>: {{ $t('row.title')}}</li>
            <li><strong>{{ $t('row.PD')}}</strong>: {{ $t('row.dec')}}, 2017</li>
          </ul>
          <p>{{ $t('row.aim2')}}</p>
        </div>
      </div>
    </div>
  </section>

</template>