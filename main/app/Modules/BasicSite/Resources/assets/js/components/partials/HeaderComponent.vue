<template>
  <header id="tg-header" class="tg-header tg-haslayout">
    <div class="tg-topbar tg-bglight tg-haslayout">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-xs-12">
            <ul class="tg-topcontactinfo">
              <li>
                <i class="fa fa-phone"></i>
                <span>
                  <a href="tel:+234 805 986 1188">+234 805 986 1188</a>
                </span>
              </li>
              <li>
                <i class="fa fa-envelope-o"></i>
                <span>
                  <a :href="`mailto:${app.email}`">{{ app.email }}</a>
                </span>
              </li>
              <li>
                <i class="fa fa-envelope-o"></i>
                <span>
                  <a href="mailto:tbtglobal@yahoo.com ">tbtglobal@yahoo.com</a>
                </span>
              </li>
              <li>
                <i class="fa fa-map-marker"></i>
                <address>{{ app.address1 }}</address>
              </li>
            </ul>
            <nav class="tg-addnav tg-themecolor">
              <ul>
                <router-link :to="{name: 'site.careers'}" tag="li">
                  <a>careers</a>
                </router-link>
                <router-link :to="{name: 'site.contact'}" tag="li">
                  <a>contact</a>
                </router-link>
                <!-- <router-link :to="{name: 'site.careers'}" tag="li">
                  <a>terms &amp; conditions</a>
                </router-link> -->
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="tg-navigationarea">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 d-flex">
            <strong class="tg-logo">
              <router-link :to="{name: 'site.root'}">
                <img src="img/logo.png" alt="site logo" />
              </router-link>
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
    props:['app'],
    components: { SiteNav }
  };
</script>

<style lang="scss">
  .tg-navigationarea {
    height: 70px;
    display: flex;
    align-items: center;

    @media (max-width: 576px) {
      .container {
        width: 100%;
      }
    }
  }

  .tg-logo {
    margin: 0;
    width: 20%;

    @media (max-width: 576px) {
      width: 65%;
    }

    img {
      max-height: 60px;
    }
  }

  .tg-nav {
    padding: 0 !important;

    li {
      padding: 0 !important;
    }
  }

  body.tg-fixednav .tg-logo {
    margin: 0;
  }

  .tg-bglight {
    background-color: #003160;
    color: #fff;

    * {
      color: #fff !important;
    }
  }
  .d-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    @media (max-width: 767px) {
      background: #fff;
    }
  }

  .tg-svginject {
    height: auto !important;
  }

  @media (max-width: 991px) {
    .tg-homeslider figure figcaption .tg-svginject {
      width: 120px;
      left: 60%;
      top: -40px;
    }
  }

  @media (max-width: 480px) {
    .tg-homeslider figure figcaption .tg-svginject {
      right: 150px;
      width: 120px;
      top: 36px;
    }
  }
</style>
