<template>
  <nav id="tg-nav" class="tg-nav">
    <div class="navbar-header">
      <button
        type="button"
        class="tg-btnnav navbar-toggle collapsed"
        data-toggle="collapse"
        data-target="#tg-navigation"
        aria-expanded="false"
      >
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div id="tg-navigation" class="collapse navbar-collapse tg-navigation">
      <ul>
        <router-link :to="{name: 'site.root'}" tag="li" exact>
          <a>home</a>
        </router-link>
        <router-link :to="{name: 'site.about'}" tag="li">
          <a>about us</a>
        </router-link>
        <router-link :to="{name: 'site.services'}" tag="li" class="menu-item-has-mega-menu">
          <a>services</a>
          <div class="mega-menu">
            <ul class="mega-menu-row">
              <router-link :to="{name: 'site.services'}" tag="li" class="mega-menu-col w-md-100">
                <a>Our Services</a>
                <ul>
                  <router-link :to="{name: 'site.services'}" tag="li">
                    <a class="fa fa-angle-right">valve maintenance</a>
                  </router-link>

                  <router-link :to="{name: 'site.services'}" tag="li">
                    <a class="fa fa-angle-right">i &amp; e services</a>
                  </router-link>

                  <router-link :to="{name: 'site.services'}" tag="li">
                    <a class="fa fa-angle-right">insulation of hot surfaces</a>
                  </router-link>

                  <router-link :to="{name: 'site.services'}" tag="li">
                    <a class="fa fa-angle-right">repair and installation of pumps</a>
                  </router-link>

                  <router-link :to="{name: 'site.services'}" tag="li">
                    <a class="fa fa-angle-right">sand blasting and painting</a>
                  </router-link>

                  <router-link :to="{name: 'site.services'}" tag="li">
                    <a class="fa fa-angle-right">sand vessel cleaning</a>
                  </router-link>

                  <router-link :to="{name: 'site.services'}" tag="li">
                    <a class="fa fa-angle-right">procurement and supplies</a>
                  </router-link>

                  <router-link :to="{name: 'site.services'}" tag="li">
                    <a class="fa fa-angle-right">mhe services</a>
                  </router-link>

                  <router-link :to="{name: 'site.services'}" tag="li">
                    <a class="fa fa-angle-right">manpower supply services</a>
                  </router-link>

                  <router-link :to="{name: 'site.services'}" tag="li">
                    <a>View Services</a>
                  </router-link>
                </ul>
              </router-link>

              <li class="mega-menu-col hidden-sm hidden-xs">
                <a href="#">Head office</a>
                <ul>
                  <li>
                    <div id="tg-location-map" class="tg-location-map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.170341675013!2d5.764113715200978!3d5.541741335332661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041ad7bc9b5f72b%3A0x2cff4bbb9faab27a!2s106%20Airport%20Road%2C%20Warri!5e0!3m2!1sen!2sng!4v1566875115241!5m2!1sen!2sng"
                        frameborder="0"
                        style="border:0"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </li>
                  <li>
                    <i class="fa fa-home"></i>
                    <address>
                      123 Eccles Old Road, Salford Road, East
                      London, Uk, M6 7AF
                    </address>
                  </li>
                  <li>
                    <i class="fa fa-envelope-o"></i>
                    <span>
                      <a href="mailto:">demo@ex.com</a>
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-phone"></i>
                    <span>+44 123 456 788 - 9</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </router-link>

        <router-link :to="{name: 'site.projects'}" tag="li">
          <a>projects</a>
        </router-link>

        <router-link :to="{name: 'site.contact'}" tag="li">
          <a>contact us</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Nav",
    components: {},
    data() {
      return {};
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
  iframe {
    width: 100%;
  }

  .w-md-100 {
    @media (max-width: 767px) {
      width: 100% !important;
    }
  }
</style>
