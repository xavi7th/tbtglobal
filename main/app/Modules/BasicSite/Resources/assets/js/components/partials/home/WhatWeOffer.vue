<template>
  <section class="tg-main-section tg-haslayout">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-offset-2 col-lg-8 col-md-offset-1 col-md-10 col-sm-offset-0 col-sm-12 col-xs-12"
        >
          <div class="tg-sectionhead">
            <div class="tg-sectiontitle">
              <!-- <h2>our services</h2> -->
              <h3>What We Offer</h3>
            </div>
            <div class="tg-description">
              <p>
                <!-- Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.-->
              </p>
            </div>
          </div>
        </div>
        <div id="tg-servicesslider" class="tg-servicesslider tg-services">
          <div class="item tg-service">
            <span class="tg-seviceicon">
              <i class="flaticon flaticon-robot-arm"></i>
            </span>
            <div class="tg-heading">
              <h4>
                <a>Valve Maintenence</a>
              </h4>
            </div>
          </div>
          <div class="item tg-service">
            <span class="tg-seviceicon">
              <i class="flaticon flaticon-drilling"></i>
            </span>
            <div class="tg-heading">
              <h4>
                <a>I&amp;E Services</a>
              </h4>
            </div>
          </div>
          <div class="item tg-service">
            <span class="tg-seviceicon">
              <i class="flaticon flaticon-container"></i>
            </span>
            <div class="tg-heading">
              <h4>
                <a>Insulation of hot surfaces</a>
              </h4>
            </div>
          </div>
          <div class="item tg-service">
            <span class="tg-seviceicon">
              <i class="flaticon flaticon-conveyor"></i>
            </span>
            <div class="tg-heading">
              <h4>
                <a>Repairs and Installations of pumps</a>
              </h4>
            </div>
          </div>
          <div class="item tg-service">
            <span class="tg-seviceicon">
              <i class="flaticon flaticon-nature"></i>
            </span>
            <div class="tg-heading">
              <h4>
                <a>Sand Blasting & Painting</a>
              </h4>
            </div>
          </div>
          <div class="item tg-service">
            <span class="tg-seviceicon">
              <i class="flaticon flaticon-container"></i>
            </span>
            <div class="tg-heading">
              <h4>
                <a>Sand Vessel Cleaning</a>
              </h4>
            </div>
          </div>
          <div class="item tg-service">
            <span class="tg-seviceicon">
              <i class="flaticon flaticon-stock"></i>
            </span>
            <div class="tg-heading">
              <h4>
                <a>Procurement and Supplies</a>
              </h4>
            </div>
          </div>
          <div class="item tg-service">
            <span class="tg-seviceicon">
              <i class="flaticon flaticon-oil"></i>
            </span>
            <div class="tg-heading">
              <h4>
                <a>MHE Services</a>
              </h4>
            </div>
          </div>
          <div class="item tg-service">
            <span class="tg-seviceicon">
              <i class="flaticon flaticon-worker-1"></i>
            </span>
            <div class="tg-heading">
              <h4>
                <a>Manpower Supply and Services</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .tg-service {
    padding: 20px;
    height: 280px;
  }
  .tg-seviceicon {
    width: 80px;
    height: 80px;
    line-height: 78px;
    i {
      font-size: 24px;
      color: #000;
    }
  }
  .tg-heading {
    &:before {
      left: 43%;
      width: 60px;
    }

    h4 {
      line-height: 1.5;
    }
  }
</style>
