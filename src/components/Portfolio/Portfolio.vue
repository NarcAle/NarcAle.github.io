<template>
  <section id="portfolio" class="portfolio section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>{{ $t('section-title.portfolio') }}</h2>
      </div>

      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">{{ $t('portfolio.all') }}</li>
            <li data-filter=".filter-game">{{ $t('portfolio.game') }}</li>
            <li data-filter=".filter-web">{{ $t('portfolio.web') }}</li>
            <li data-filter=".filter-webApp">{{ $t('portfolio.webApp') }}</li>
            <li data-filter=".filter-uni">{{ $t('portfolio.uni') }}</li>
            <li data-filter=".filter-DA">{{ $t('portfolio.DA') }}</li>
          </ul>
        </div>
      </div>

      <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200" >
        <div class="col-lg-4 col-md-6 portfolio-item filter-game" @click="$bvModal.show('bv-modal-riskala')" >
          <div class="portfolio-wrap">
            <img src="../../assets/portfolio/risiko.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>{{ $t('portfolio.risiko') }}</h4>
              <p>{{ $t('portfolio.game') }}</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web" @click="$bvModal.show('bv-modal-blog')">
          <div class="portfolio-wrap">
            <img src="../../assets/portfolio/blog-1.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>{{ $t('portfolio.title') }}</h4>
              <p>{{ $t('portfolio.web') }}</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-webApp" @click="$bvModal.show('bv-modal-eco')">
          <div class="portfolio-wrap">
            <img src="../../assets/portfolio/ecoAss.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>{{ $t('portfolio.title2') }}</h4>
              <p>{{ $t('portfolio.webApp') }}</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-uni" @click="$bvModal.show('bv-modal-fool')">
          <div class="portfolio-wrap">
            <img src="../../assets/portfolio/fool.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>{{ $t('portfolio.title5') }}</h4>
              <p>{{ $t('portfolio.uni') }}</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-DA" @click="$bvModal.show('bv-modal-fcla')">
          <div class="portfolio-wrap">
            <img src="../../assets/portfolio/FCLA.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>{{ $t('portfolio.title6') }}</h4>
              <p>{{ $t('portfolio.DA') }}</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web" @click="$bvModal.show('bv-modal-avis')">
          <div class="portfolio-wrap">
            <img src="../../assets/portfolio/avis.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>{{ $t('portfolio.title4') }}</h4>
              <p>{{ $t('portfolio.web') }}</p>
            </div>
          </div>
        </div>
    
        <div class="col-lg-4 col-md-6 portfolio-item filter-web" @click="$bvModal.show('bv-modal-azienda')">
          <div class="portfolio-wrap">
            <img src="../../assets/portfolio/aziendaAgricola.png" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>{{ $t('portfolio.title3') }}</h4>
              <p>{{ $t('portfolio.web') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal class="modal-lg" id="bv-modal-riskala" size="xl" hide-footer>
      <template #modal-title>
        <PD />
      </template>
    </b-modal>

    <b-modal class="modal-lg" id="bv-modal-blog" size="xl" hide-footer>
      <template #modal-title>
        <PDB />
      </template>
    </b-modal>

    <b-modal class="modal-lg" id="bv-modal-eco" size="xl" hide-footer>
      <template #modal-title>
        <PDE />
      </template>
    </b-modal>

    <b-modal class="modal-lg" id="bv-modal-avis" size="xl" hide-footer>
      <template #modal-title>
        <PDA />
      </template>
    </b-modal>

    <b-modal class="modal-lg" id="bv-modal-azienda" size="xl" hide-footer>
      <template #modal-title>
        <PDAZ />
      </template>
    </b-modal>

    <b-modal class="modal-lg" id="bv-modal-fool" size="xl" hide-footer>
      <template #modal-title>
        <PDF />
      </template>
    </b-modal>

    <b-modal class="modal-lg" id="bv-modal-fcla" size="xl" hide-footer>
      <template #modal-title>
        <PDFCLA />
      </template>
    </b-modal>
  </section>
</template>

<style lang="sass">
#bv-modal-riskala___BV_modal_outer_, #bv-modal-blog___BV_modal_outer_, #bv-modal-eco___BV_modal_outer_,
#bv-modal-avis___BV_modal_outer_, #bv-modal-azienda___BV_modal_outer_, #bv-modal-fool, #bv-modal-fcla
  z-index: 9999 !important
#bv-modal-riskala, #bv-modal-blog, #bv-modal-eco,
#bv-modal-avis, #bv-modal-azienda, #bv-modal-fool,
#bv-modal-fcla
  padding: 20px,
  
</style>

<script>
import PD from './portfolio-details.vue'
import PDB from './portfolio-details-blog.vue'
import PDE from './portfolio-details-ecoAss.vue'
import PDA from './portfolio-details-avis.vue'
import PDAZ from './portfolio-details-azienda.vue'
import PDF from './portfolio-details-FOOL.vue'
import PDFCLA from './portfolio-details-FCLA.vue'
export default {
  components: {
    PD,
    PDB,
    PDE,
    PDA,
    PDAZ,
    PDF,
    PDFCLA
  },
}
</script>