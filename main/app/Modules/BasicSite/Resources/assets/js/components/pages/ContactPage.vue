<template>
  <div>
    <page-header title="Contact Us"></page-header>
    <main id="tg-main" class="tg-main tg-haslayout">
      <!--************************************
					Location Map Start
      *************************************-->
      <div id="tg-locationmap" class="tg-locationmap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.196040245999!2d5.7441429152009365!3d5.537918535369969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041ad5ec810070d%3A0xb060401e1d0c99e2!2sAirport%20Road%2C%20Warri!5e0!3m2!1sen!2sng!4v1566652457002!5m2!1sen!2sng"
          frameborder="0"
          style="border:0; height:100%; width:100%;"
          allowfullscreen
        ></iframe>
      </div>
      <!--************************************
					Location Map End
      *************************************-->

      <!--************************************
					Get In Touch Start
      *************************************-->
      <section class="tg-main-section tg-haslayout">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-offset-2 col-lg-8 col-md-offset-1 col-md-10 col-sm-offset-0 col-sm-12 col-xs-12"
            >
              <div class="tg-sectionhead">
                <div class="tg-sectiontitle">
                  <h2>let’s talk</h2>
                  <h3>Get in Touch</h3>
                </div>
                <div class="tg-description">
                  <!-- <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> -->
                </div>
              </div>
            </div>
            <form class="tg-themeform">
              <fieldset>
                <div class="col-sm-4">
                  <div class="form-group">
                    <input type="text" class="form-control" name="name" placeholder="Name" />
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <input type="text" class="form-control" name="number" placeholder="Number" />
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <input type="email" class="form-control" name="email" placeholder="Email" />
                  </div>
                </div>
                <div class="col-sm-12 col-xs-12">
                  <div class="form-group">
                    <textarea placeholder="Message"></textarea>
                  </div>
                </div>
                <div class="col-sm-12 col-xs-12">
                  <button type="button" class="tg-btn">
                    <span>i’m waiting</span>
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
      <!--************************************
					Get In Touch End
      *************************************-->
    </main>
  </div>
</template>

<script>
  import pageLoad from "@assets/js/config/pageload.mixin";
  import PageHeader from "@components/partials/PageHeader";
  export default {
    name: "ContactsPage",
    mixins: [pageLoad],
    components: { PageHeader }
  };
</script>

<style lang="scss" scoped>
</style>
