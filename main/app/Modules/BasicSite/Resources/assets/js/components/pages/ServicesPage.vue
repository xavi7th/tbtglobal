<template>
  <div>
    <page-header title="Our Services" v-if="isServicesPage"></page-header>
    <transition name="slide-out-in" mode="out-in" :duration="{ enter: 1300, leave: 200 }">
      <main id="tg-main" class="tg-main tg-haslayout" v-if="isServicesPage">
        <!--************************************
					What We Offers Start
        *************************************-->
        <section class="tg-main-section tg-paddingbottomzero tg-haslayout">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-offset-2 col-lg-8 col-md-offset-1 col-md-10 col-sm-offset-0 col-sm-12 col-xs-12"
              >
                <div class="tg-sectionhead">
                  <div class="tg-sectiontitle">
                    <h2>our services</h2>
                    <h3>What We Offer</h3>
                  </div>
                  <div class="tg-description">
                    <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-8 col-sm-12 col-xs-12">
                <div class="row">
                  <div class="tg-services tg-servicestyletwo">
                    <div class="col-sm-6">
                      <div class="tg-box">
                        <div class="tg-service">
                          <span class="tg-seviceicon">
                            <i class="fa fa-balance-scale"></i>
                          </span>
                          <div class="tg-heading">
                            <h4>
                              <a href="#">Future planning</a>
                            </h4>
                          </div>
                          <div class="tg-description">
                            <p>Consectetur adipisicing elit sed doid apor incididunt labore</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="tg-box">
                        <div class="tg-service">
                          <span class="tg-seviceicon">
                            <i class="fa fa-line-chart"></i>
                          </span>
                          <div class="tg-heading">
                            <h4>
                              <a href="#">Future planning</a>
                            </h4>
                          </div>
                          <div class="tg-description">
                            <p>Consectetur adipisicing elit sed doid apor incididunt labore</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="tg-box">
                        <div class="tg-service">
                          <span class="tg-seviceicon">
                            <i class="fa fa-trophy"></i>
                          </span>
                          <div class="tg-heading">
                            <h4>
                              <a href="#">Future planning</a>
                            </h4>
                          </div>
                          <div class="tg-description">
                            <p>Consectetur adipisicing elit sed doid apor incididunt labore</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="tg-box">
                        <div class="tg-service">
                          <span class="tg-seviceicon">
                            <i class="fa fa-flag-o"></i>
                          </span>
                          <div class="tg-heading">
                            <h4>
                              <a href="#">Future planning</a>
                            </h4>
                          </div>
                          <div class="tg-description">
                            <p>Consectetur adipisicing elit sed doid apor incididunt labore</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 hidden-sm hidden-xs">
                <figure class="tg-serviceimg">
                  <img src="/img/img-03.jpg" alt="image description" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <!--************************************
					What We Offers End
        *************************************-->
        <!--************************************
					Statistics Start
        *************************************-->
        <company-statistics></company-statistics>
        <!--************************************
					Statistics End
        *************************************-->

        <!--************************************
					Testimonials Start
        *************************************-->
        <section class="tg-main-section tg-haslayout">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-offset-2 col-lg-8 col-md-offset-1 col-md-10 col-sm-offset-0 col-sm-12 col-xs-12"
              >
                <div class="tg-sectionhead">
                  <div class="tg-sectiontitle">
                    <h2>thoughts of our</h2>
                    <h3>Satisfied customers</h3>
                  </div>
                  <div class="tg-description">
                    <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
              <div id="tg-testimonialsslider" class="tg-testimonialsslider tg-clientfeedback">
                <div class="item tg-testimonial">
                  <blockquote>
                    <q>Tempor incididunt ut labore et dolore magna aliqua enim adiat minim sitaie veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.</q>
                  </blockquote>
                  <div class="tg-clientinfo">
                    <figure>
                      <a href="#">
                        <img src="/img/thumbs/img-01.jpg" alt="image description" />
                      </a>
                    </figure>
                    <div class="tg-namecountery">
                      <h4>
                        <a href="#">Christi jenny</a>
                      </h4>
                      <span>Manchester</span>
                    </div>
                  </div>
                </div>
                <div class="item tg-testimonial">
                  <blockquote>
                    <q>Tempor incididunt ut labore et dolore magna aliqua enim adiat minim sitaie veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.</q>
                  </blockquote>
                  <div class="tg-clientinfo">
                    <figure>
                      <a href="#">
                        <img src="/img/thumbs/img-02.jpg" alt="image description" />
                      </a>
                    </figure>
                    <div class="tg-namecountery">
                      <h4>
                        <a href="#">Milford smith</a>
                      </h4>
                      <span>Manchester</span>
                    </div>
                  </div>
                </div>
                <div class="item tg-testimonial">
                  <blockquote>
                    <q>Tempor incididunt ut labore et dolore magna aliqua enim adiat minim sitaie veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.</q>
                  </blockquote>
                  <div class="tg-clientinfo">
                    <figure>
                      <a href="#">
                        <img src="/img/thumbs/img-01.jpg" alt="image description" />
                      </a>
                    </figure>
                    <div class="tg-namecountery">
                      <h4>
                        <a href="#">Christi jenny</a>
                      </h4>
                      <span>Manchester</span>
                    </div>
                  </div>
                </div>
                <div class="item tg-testimonial">
                  <blockquote>
                    <q>Tempor incididunt ut labore et dolore magna aliqua enim adiat minim sitaie veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.</q>
                  </blockquote>
                  <div class="tg-clientinfo">
                    <figure>
                      <a href="#">
                        <img src="/img/thumbs/img-02.jpg" alt="image description" />
                      </a>
                    </figure>
                    <div class="tg-namecountery">
                      <h4>
                        <a href="#">Milford smith</a>
                      </h4>
                      <span>Manchester</span>
                    </div>
                  </div>
                </div>
                <div class="item tg-testimonial">
                  <blockquote>
                    <q>Tempor incididunt ut labore et dolore magna aliqua enim adiat minim sitaie veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.</q>
                  </blockquote>
                  <div class="tg-clientinfo">
                    <figure>
                      <a href="#">
                        <img src="/img/thumbs/img-01.jpg" alt="image description" />
                      </a>
                    </figure>
                    <div class="tg-namecountery">
                      <h4>
                        <a href="#">Christi jenny</a>
                      </h4>
                      <span>Manchester</span>
                    </div>
                  </div>
                </div>
                <div class="item tg-testimonial">
                  <blockquote>
                    <q>Tempor incididunt ut labore et dolore magna aliqua enim adiat minim sitaie veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.</q>
                  </blockquote>
                  <div class="tg-clientinfo">
                    <figure>
                      <a href="#">
                        <img src="/img/thumbs/img-02.jpg" alt="image description" />
                      </a>
                    </figure>
                    <div class="tg-namecountery">
                      <h4>
                        <a href="#">Milford smith</a>
                      </h4>
                      <span>Manchester</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--************************************
					Testimonials End
        *************************************-->

        <ads-bar></ads-bar>
      </main>
      <keep-alive v-else>
        <router-view @page-loaded="$emit('page-loaded')"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import pageLoad from "@assets/js/config/pageload.mixin";
  import PageHeader from "@components/partials/PageHeader";
  import CompanyStatistics from "@components/partials/home/CompanyStatistics";
  import AdsBar from "@components/partials/home/AdsBar";
  export default {
    name: "Services",
    mixins: [pageLoad],
    components: { AdsBar, CompanyStatistics, PageHeader },
    computed: {
      isServicesPage() {
        return this.$route.name == "site.services";
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
