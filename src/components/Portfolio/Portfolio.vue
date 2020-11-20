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
                <b-button @click="$bvModal.show('bv-modal-riskalaIMG')"><i class="bx bx-plus"></i></b-button>
                <b-button @click="$bvModal.show('bv-modal-riskala')"><i class="bx bx-link" ></i></b-button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src="../../assets/portfolio/blog-1.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>{{ $t('row.title') }}</h4>
              <p>Web</p>
              <div class="portfolio-links">
                <b-button @click="$bvModal.show('bv-modal-blogIMG')"><i class="bx bx-plus"></i></b-button>
               <b-button @click="$bvModal.show('bv-modal-blog')"><i class="bx bx-link"></i></b-button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src="../../assets/portfolio/ecoAss.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>{{ $t('row.title2') }}</h4>
              <p>Web</p>
              <div class="portfolio-links">
                <b-button @click="$bvModal.show('bv-modal-ecoIMG')"><i class="bx bx-plus"></i></b-button>
                <b-button @click="$bvModal.show('bv-modal-eco')"><i class="bx bx-link"></i></b-button>
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
                <b-button @click="$bvModal.show('bv-modal-avisIMG')"><i class="bx bx-plus"></i></b-button>
                <b-button @click="$bvModal.show('bv-modal-avis')"><i class="bx bx-link"></i></b-button>
              </div>
            </div>
          </div>
        </div>
    
        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src="../../assets/portfolio/aziendaAgricola.png" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>{{ $t('row.title4') }}</h4>
              <p>Web</p>
              <div class="portfolio-links">
                <b-button @click="$bvModal.show('bv-modal-aziendaIMG')"><i class="bx bx-plus"></i></b-button>
                <b-button @click="$bvModal.show('bv-modal-azienda')"><i class="bx bx-link"></i></b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal class="modal-lg" id="bv-modal-riskalaIMG" size="xl" hide-footer>
      <template #modal-title>
        <img src="../../assets/portfolio/risiko.jpg" style="width: 100%" alt="risicoImg" />
      </template>
    </b-modal>
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
     <b-modal class="modal-lg" id="bv-modal-blogIMG" size="xl" hide-footer>
      <template #modal-title>
        <img src="../../assets/portfolio/blog-1.jpg" style="width: 100%" alt="blogIMG" />
      </template>
    </b-modal>

    <b-modal class="modal-lg" id="bv-modal-eco" size="xl" hide-footer>
      <template #modal-title>
        <PDE />
      </template>
    </b-modal>
     <b-modal class="modal-lg" id="bv-modal-ecoIMG" size="xl" hide-footer>
      <template #modal-title>
        <img src="../../assets/portfolio/ecoAss.jpg" style="width: 100%" alt="ecoIMG" />
      </template>
    </b-modal>

    <b-modal class="modal-lg" id="bv-modal-avis" size="xl" hide-footer>
      <template #modal-title>
        <PDA />
      </template>
    </b-modal>
     <b-modal class="modal-lg" id="bv-modal-avisIMG" size="xl" hide-footer>
      <template #modal-title>
        <img src="../../assets/portfolio/avis.jpg" style="width: 100%" alt="avisIMG" />
      </template>
    </b-modal>

    <b-modal class="modal-lg" id="bv-modal-azienda" size="xl" hide-footer>
      <template #modal-title>
        <PDAZ />
      </template>
    </b-modal>
     <b-modal class="modal-lg" id="bv-modal-aziendaIMG" size="xl" hide-footer>
      <template #modal-title>
        <img src="../../assets/portfolio/aziendaAgricola.png" style="width: 100%" alt="aziendaIMG" />
      </template>
    </b-modal>
  </section>
</template>

<style lang="sass">
#bv-modal-riskala, #bv-modal-riskalaIMG, #bv-modal-blog, #bv-modal-blogIMG, #bv-modal-eco, #bv-modal-ecoIMG,
#bv-modal-avis, #bv-modal-avisIMG, #bv-modal-azienda, #bv-modal-aziendaIMG
  padding: 20px
</style>

<script>
import PD from './portfolio-details.vue'
import PDB from './portfolio-details-blog.vue'
import PDE from './portfolio-details-ecoAss.vue'
import PDA from './portfolio-details-avis.vue'
import PDAZ from './portfolio-details-azienda.vue'
export default {
  components: {
    PD,
    PDB,
    PDE,
    PDA,
    PDAZ
  },
}
</script>