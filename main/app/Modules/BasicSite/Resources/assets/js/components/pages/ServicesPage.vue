<template>
  <div>
    <page-header title="Our Services" v-if="isServicesPage"></page-header>
    <transition name="slide-out-in" mode="out-in" :duration="{ enter: 1300, leave: 200 }">
      <main id="tg-main" class="tg-main tg-haslayout" v-if="isServicesPage">
        <!--************************************
					What We Offers Start
        *************************************-->
        <section class="tg-main-section tg-haslayout">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-offset-2 col-lg-8 col-md-offset-1 col-md-10 col-sm-offset-0 col-sm-12 col-xs-12"
              >
                <div class="tg-sectionhead">
                  <div class="tg-sectiontitle">
                    <h2>what we do</h2>
                    <h3>What We Offer</h3>
                  </div>
                  <div class="tg-description">
                    <p>Our ability to successfully handle projects in the following areas of specialization is simply based on our commitment to retaining the services of competent in-house professional engineers, inspectors and technicians, including expatriates who have acquired proficiency in their skills through professional and academic training, as well as extensive involvement in allied industries.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="row">
                  <div class="tg-services tg-servicestyletwo">
                    <div class="col-sm-4">
                      <div class="tg-box">
                        <div class="tg-service valve">
                          <span class="tg-seviceicon">
                            <i class="flaticon flaticon-robot-arm"></i>
                          </span>
                          <div class="tg-heading">
                            <h4>
                              <a>Valve Maintenance</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-4">
                      <div class="tg-box">
                        <div class="tg-service ie">
                          <span class="tg-seviceicon">
                            <i class="flaticon flaticon-drilling"></i>
                          </span>
                          <div class="tg-heading">
                            <h4>
                              <a>I &amp; E Services</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="tg-box">
                        <div class="tg-service insulation">
                          <span class="tg-seviceicon">
                            <i class="flaticon flaticon-container"></i>
                          </span>
                          <div class="tg-heading">
                            <h4>
                              <a>Insulation of Hot Surfaces</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="tg-box">
                        <div class="tg-service mhe">
                          <span class="tg-seviceicon">
                            <i class="flaticon flaticon-oil"></i>
                          </span>
                          <div class="tg-heading">
                            <h4>
                              <a>MHE Services</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="tg-box">
                        <div class="tg-service repairs">
                          <span class="tg-seviceicon">
                            <i class="flaticon flaticon-conveyor"></i>
                          </span>
                          <div class="tg-heading">
                            <h4>
                              <a>Repair and Installation of Pumps</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="tg-box">
                        <div class="tg-service sandblasting">
                          <span class="tg-seviceicon">
                            <i class="flaticon flaticon-nature"></i>
                          </span>
                          <div class="tg-heading">
                            <h4>
                              <a>Sand Blasting</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="tg-box">
                        <div class="tg-service vessel">
                          <span class="tg-seviceicon">
                            <i class="flaticon flaticon-container"></i>
                          </span>
                          <div class="tg-heading">
                            <h4>
                              <a>Sand Vessel Cleaning</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="tg-box">
                        <div class="tg-service procurement">
                          <span class="tg-seviceicon">
                            <i class="flaticon flaticon-stock"></i>
                          </span>
                          <div class="tg-heading">
                            <h4>
                              <a>Procurement and Supply</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="tg-box">
                        <div class="tg-service manpower">
                          <span class="tg-seviceicon">
                            <i class="flaticon flaticon-worker-1"></i>
                          </span>
                          <div class="tg-heading">
                            <h4>
                              <a>Manpower Supply Services</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
        <!-- <company-statistics></company-statistics> -->
        <!--************************************
					Statistics End
        *************************************-->

        <!-- <ads-bar></ads-bar> -->
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
  .tg-service {
    height: 200px;
    position: relative;
    background-position: center;
    background-size: cover;

    &.ie {
      background-image: url("/img/services/ie.jpg");
    }

    &.mhe {
      background-image: url("/img/services/mhe.jpg");
    }

    &.procurement {
      background-image: url("/img/services/procurement.jpg");
    }

    &.insulation {
      background-image: url("/img/services/insulation.jpg");
    }

    &.repairs {
      background-image: url("/img/services/repairs.jpg");
    }

    &.sandblasting {
      background-image: url("/img/services/sandblasting.jpg");
    }

    &.valve {
      background-image: url("/img/services/valve.jpg");
    }

    &.manpower {
      background-image: url("/img/services/manpower.jpg");
    }

    &.vessel {
      background-image: url("/img/services/vessel.jpg");
    }
  }
  .tg-servicestyletwo {
    .tg-heading {
      padding-top: 0;
      position: absolute;
      width: 100%;
      bottom: 0;
      padding-bottom: 10px;
      height: 50px;
      background-image: linear-gradient(to top, black 20%, transparent 90%);
      color: #fff;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      transition: all 300ms ease-out;

      a {
        line-height: 1.2;
        color: #fff;
      }
    }

    .tg-box {
      .tg-seviceicon {
        opacity: 0.6;
        transition: opacity ease-in-out 300ms;
      }
      &:hover {
        .tg-seviceicon {
          opacity: 1;
        }
        .tg-heading {
          height: 80px;
          padding-bottom: 15px;
          background-image: linear-gradient(to top, black 40%, transparent 95%);

          a {
            color: #fff;
          }
        }
      }
    }

    > div:nth-child(odd) {
      .tg-box {
        padding: 0;
      }
    }
    > div:nth-child(even) {
      .tg-seviceicon {
        z-index: 1;
      }
      .tg-box {
        padding: 0;

        .procurement,
        .insulation {
          .tg-heading {
            justify-content: flex-end;
            padding-right: 15px;
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .tg-main-section {
      padding-bottom: 0;
    }
    .tg-services.tg-servicestyletwo {
      padding-bottom: 60px;
    }
  }
</style>
