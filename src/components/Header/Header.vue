<template>
  <div>
    <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>
    <div id="header" class="d-flex flex-column justify-content-center header">

      <nav class="nav-menu">
        <ul>
          <li class="active"><a href="#hero"><i class="bx bx-home"></i> <span>{{ $t("header.home") }}</span></a></li>
          <li><a href="#about"><i class="bx bx-user"></i> <span>{{ $t("header.about") }}</span></a></li>
          <li><a href="#skills"><i class="bx bx-network-chart"></i> <span>{{ $t("header.skills") }}</span></a></li>
          <li><a href="#resume"><i class="bx bx-file-blank"></i> <span>{{ $t("header.resume") }}</span></a></li>
          <li><a href="#portfolio"><i class="bx bx-book-content"></i> <span>{{ $t("header.portfolio") }}</span></a></li>
          <!--<li><a href="#services"><i class="bx bx-server"></i> <span>Services</span></a></li>-->
          <li><a href="#contact"><i class="bx bx-envelope"></i> <span>{{ $t("header.contact") }}</span></a></li>
        </ul>
      </nav>

    </div>
  </div>
</template>

<style lang="sass">
@import './Header'
@import '../../../custom.css'
</style>
