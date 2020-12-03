<template id="main">
  <section id="about" class="about">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>{{ $t('section-title.about') }}</h2>
        <p>{{ $t('section-title.presento') }}</p>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <img src="../../assets/profile-img.jpg" class="img-fluid imageMe" alt="Image of me">
        </div>
        <div id="contentAbout" class="col-lg-8 pt-4 pt-lg-0 content">
          <h3>{{ $t('contentAbout.role') }}</h3>
          <p class="font-italic">
            {{ $t('contentAbout.des') }}
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li><i class="icofont icofont-rounded-right"></i> <strong>{{ $t('contentAbout.BD') }}:</strong> {{ $t('contentAbout.bir') }}</li>
                <li><i class="icofont icofont-rounded-right"></i> <strong>{{ $t('contentAbout.website') }}:</strong>
                  <a href="https://narcale.github.io/">{{ $t('contentAbout.myWebsite') }}</a>
                </li>
                <li><i class="icofont icofont-rounded-right"></i> <strong>{{ $t('contentAbout.phone') }}:</strong> {{ $t('row.myPhone') }}</li>
                <li><i class="icofont icofont-rounded-right"></i> <strong>{{ $t('contentAbout.city') }}:</strong>{{ $t('row.myCity') }}</li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><i class="icofont icofont-rounded-right"></i> <strong>{{ $t('contentAbout.degree') }}:</strong> {{ $t('contentAbout.myDegree') }}</li>
                <li><i class="icofont icofont-rounded-right"></i> <strong>{{ $t('contentAbout.email') }}:</strong> {{ $t('row.myMail') }}</li>
                <li><i class="icofont icofont-rounded-right"></i> <strong>{{ $t('contentAbout.freelance') }}:</strong> {{ $t('contentAbout.available') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass">
@import './About.sass'
</style>