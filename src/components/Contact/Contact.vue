<template id="main">
  <section id="contact" class="contact">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>{{ $t('section-title.title') }}</h2>
      </div>

      <div class="row mt-1">

        <div class="col-lg-4">
          <div class="info">
            <div class="address">
              <i class="bx bx-map"></i>
              <h4>{{ $t('row.location') }}:</h4>
              <p>Folimpopoli, FC, 47034</p>
            </div>

            <div class="email">
              <i class="bx bx-envelope"></i>
              <h4>Email:</h4>
              <p><a href="mailto:ceramialessia@gmail.com">ceramialessia@gmail.com</a></p>
            </div>

            <div class="phone">
              <i class="bx bx-phone"></i>
              <h4>{{ $t('row.cell') }}:</h4>
              <p>3294735359</p>
            </div>

          </div>

        </div>

        <div class="col-lg-8 mt-5 mt-lg-0">
          <form action="https://formspree.io/f/xoqpleag" method="post" role="form" class="php-email-form">
            <div class="form-row">
              <div class="col-md-6 form-group">
                <input type="text" name="name" class="form-control" id="name" :placeholder="$t('row.enterName')" data-rule="minlen:1" :data-msg="$t('row.dataMsg')" />
                <div class="validate"></div>
              </div>
              <div class="col-md-6 form-group">
                <input type="email" class="form-control" name="_replyto" id="email" :placeholder="$t('row.enterMail')" data-rule="email" :data-msg="$t('row.dataMsgMail')" />
                <div class="validate"></div>
              </div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="subject" id="subject" :placeholder="$t('row.subject')" data-rule="minlen:0" :data-msg="$t('row.dataMsgSbj')" />
              <div class="validate"></div>
            </div>
            <div class="form-group">
              <textarea class="form-control" name="message" rows="5" data-rule="required" :data-msg="$t('row.dataMsgMsg')" :placeholder="$t('row.message')"></textarea>
              <div class="validate"></div>
            </div>
            
            <div class="text-center"><button type="submit">{{ $t('row.sendMsg') }}</button></div>
          </form>

        </div>

      </div>

    </div>
  </section>
</template>

<style lang="sass">
@import './Contact'
</style>
