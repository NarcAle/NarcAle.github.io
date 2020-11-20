<template>
  <section id="portfolio" class="portfolio section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Portfolio</h2>
      </div>

      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-game">Game</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div>

      <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
        <div class="col-lg-4 col-md-6 portfolio-item filter-game">
          <div class="portfolio-wrap">
            <img src="../../assets/portfolio/risiko.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Risiko</h4>
              <p>Game</p>
              <div class="portfolio-links">
                <a href="../../assets/portfolio/risiko.jpg" data-gall="portfolioGallery" class="venobox" title="Risiko game"><i class="bx bx-plus"></i></a>
                <a href="./portfolio-details.vue" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src="../../assets/portfolio/blog-1.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Blog di cucina</h4>
              <p>Web</p>
              <div class="portfolio-links">
                <a href="../../assets/portfolio/blog-1.jpg" data-gall="portfolioGallery" class="venobox" title="Blog di cucina"><i class="bx bx-plus"></i></a>
                <a href="./portfolio-details-blog.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src="../../assets/portfolio/ecoAss.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Assistente nutrizionale Ecosostenibile</h4>
              <p>Web</p>
              <div class="portfolio-links">
                <a href="../../assets/portfolio/ecoAss.jpg" data-gall="portfolioGallery" class="venobox" title="ecoAss"><i class="bx bx-plus"></i></a>
                <a href="./portfolio-details-ecoAss.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src="../../assets/portfolio/avis.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Avis</h4>
              <p>Web</p>
              <div class="portfolio-links">
                <a href="../../assets/portfolio/avis.jpg" data-gall="portfolioGallery" class="venobox" title="Avis"><i class="bx bx-plus"></i></a>
                <a href="./portfolio-details-avis.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>
    
        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src="../../assets/portfolio/aziendaAgricola.png" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Azienda Agricola Giordano Emanuele</h4>
              <p>Web</p>
              <div class="portfolio-links">
                <a href="../../assets/portfolio/aziendaAgricola.png" data-gall="portfolioGallery" class="venobox" title="Azienda Agricola Giordano Emanuele"><i class="bx bx-plus"></i></a>
                <a href="./portfolio-details-azienda.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>