<template id="main">
  <section id="about" class="about">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>{{ $t('section-title.about') }}</h2>
        <p>{{ $t('section-title.presento') }}</p>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <img src="../../assets/profile-img.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content">
          <h3>UI/UX Designer &amp; Web Developer.</h3>
          <p class="font-italic">
            {{ $t('row.des') }}
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li><i class="icofont icofont-rounded-right"></i> <strong>{{ $t('row.BD') }}:</strong> {{ $t('row.bir') }}</li>
                <li><i class="icofont icofont-rounded-right"></i> <strong>{{ $t('row.website') }}:</strong> https://narcale.github.io/</li>
                <li><i class="icofont icofont-rounded-right"></i> <strong>{{ $t('row.phone') }}:</strong> 329	4735359</li>
                <li><i class="icofont icofont-rounded-right"></i> <strong>{{ $t('row.city') }}:</strong>Forlimpopoli, FC</li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><i class="icofont icofont-rounded-right"></i> <strong>{{ $t('row.degree') }}:</strong> Laurea</li>
                <li><i class="icofont icofont-rounded-right"></i> <strong>Email:</strong> ceramialessia@gmail.com</li>
                <li><i class="icofont icofont-rounded-right"></i> <strong>Freelance:</strong> {{ $t('row.available') }}</li>
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