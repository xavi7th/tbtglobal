<template>
  <header id="tg-header" class="tg-header tg-haslayout">
    <div class="tg-topbar tg-bglight tg-haslayout">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-xs-12">
            <ul class="tg-topcontactinfo">
              <li>
                <i class="fa fa-phone"></i>
                <span>+234 803 441 1661</span>
              </li>
              <li>
                <i class="fa fa-envelope-o"></i>
                <span>
                  <a href="mailto:hello@domain.com ">hello@tbt-gbc.com</a>
                </span>
              </li>
              <li>
                <i class="fa fa-map-marker"></i>
                <address>Warri, Delta State Nigeria</address>
              </li>
            </ul>
            <!-- <nav class="tg-addnav tg-themecolor">
              <ul>
                <router-link :to="{name: 'site.careers'}" tag="li">
                  <a>careers</a>
                </router-link>
                <router-link :to="{name: 'site.contact'}" tag="li">
                  <a>contact</a>
                </router-link>
                <router-link :to="{name: 'site.careers'}" tag="li">
                  <a>terms &amp; conditions</a>
                </router-link>
              </ul>
            </nav>-->
          </div>
        </div>
      </div>
    </div>
    <div class="tg-navigationarea">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <strong class="tg-logo">
              <a href="index.html">
                <img src="img/logo.png" alt="image description" />
              </a>
            </strong>
            <site-nav></site-nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import SiteNav from "@components/partials/NavComponent";
  export default {
    name: "Header",
    components: { SiteNav }
  };
</script>

<style lang="scss">
  .tg-logo {
    margin: 30px 0 0;
    width: 14%;

    @media (max-width: 576px) {
      margin-top: 15px;
      width: 22%;
    }
  }

  body.tg-fixednav .tg-logo {
    margin: 0;
  }
</style>
