<template>
  <div>
    <page-header title="Contact Us"></page-header>
    <main id="tg-main" class="tg-main tg-haslayout">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-md-offset-2">
            <div class="item tg-service">
              <span class="tg-seviceicon">
                <i class="fa fa-home"></i>
              </span>
              <div class="tg-heading">
                <h4>
                  <a>Head Office</a>
                </h4>
              </div>
              <div class="tg-description">
                <p>Plot 106 Airport Road, Warri, Delta State.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="item tg-service">
              <span class="tg-seviceicon">
                <i class="fa fa-location-arrow"></i>
              </span>
              <div class="tg-heading">
                <h4>
                  <a>Branch Office</a>
                </h4>
              </div>
              <div class="tg-description">
                <p>50 Country Road, off Sapele Road, Benin City, Edo State.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--************************************
					Location Map Start
      *************************************-->
      <div id="tg-locationmap" class="tg-locationmap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.170341675013!2d5.764113715200978!3d5.541741335332661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041ad7bc9b5f72b%3A0x2cff4bbb9faab27a!2s106%20Airport%20Road%2C%20Warri!5e0!3m2!1sen!2sng!4v1566875115241!5m2!1sen!2sng"
          frameborder="0"
          style="border:0; height:100%; width:100%;"
          allowfullscreen
        ></iframe>
      </div>
      <!--************************************
					Location Map End
      *************************************-->

      <section class="tg-main-section tg-haslayout">
        <div class="col-sm-12">
          <div class="tg-sectionhead">
            <div class="tg-sectiontitle">
              <h2>let’s talk</h2>
              <h3>Get in Touch</h3>
            </div>
          </div>
        </div>

        <form class="tg-themeform" @submit.prevent="sendEmail">
          <fieldset>
            <div class="col-sm-12">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  v-model="details.name"
                  placeholder="Name"
                  autofocus
                />
              </div>
            </div>
            <div class="col-sm-12">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  v-model="details.email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="col-sm-12 col-xs-12">
              <div class="form-group">
                <textarea v-model="details.message" placeholder="Message"></textarea>
              </div>
            </div>
            <div class="col-sm-12 col-xs-12">
              <button type="submit" class="tg-btn pull-right">
                <span>i’m waiting</span>
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
  import pageLoad from "@assets/js/config/pageload.mixin";
  import PageHeader from "@components/partials/PageHeader";
  export default {
    name: "ContactsPage",
    mixins: [pageLoad],
    components: { PageHeader },
    data: () => ({
      details: {}
    }),
    mounted() {
      this.$emit("is-contact-page");
    },
    beforeDestroy() {
      this.$emit("leaving-contact-page");
    },
    methods: {
      sendEmail() {
        BlockToast.fire({
          type: "info",
          title: "Sending..."
        });
        axios
          .post("/api/contact-us", { ...this.details })
          .then(rsp => {
            if (rsp && rsp.status == 201) {
              Toast.fire({
                title: "Mesage sent!",
                text:
                  "Thanks for contacting us. We will get back to you as soon as we can. Have a great day",
                position: "center",
                showConfirmButton: true,
                timer: 10000,
                type: "success"
              });
            }
          })
          .catch(err => {
            console.log(err.response);
            if (err.response.status == 500) {
              Toast.fire({
                title: "An error occured. Message not sent",
                position: "center",
                showConfirmButton: true,
                timer: 10000,
                type: "error"
              });
            }
          });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .tg-main {
    padding-bottom: 0;
  }
  .tg-service {
    height: 250px;
    padding: 60px;
    justify-content: center;
    background: #003b73;
    color: #fff;

    @media (max-width: 800px) {
      height: auto;
    }

    &:hover {
      background: #fff;
      color: #515151;
    }

    .tg-seviceicon {
      height: 60px;
      width: 60px;
      margin: 0;
      line-height: 60px;
    }
  }

  .tg-heading {
    padding-bottom: 50px;

    &:before {
      content: none;
    }

    &:after {
      top: 60px;
      left: 50%;
      width: 30px;
      height: 2px;
      content: "";
      background: #ddd;
      position: absolute;
      margin: 0 0 0 -15px;
    }

    h4 {
      font-weight: bold;
      a {
        color: #fff;
      }
    }
  }

  .tg-locationmap {
    margin-top: 50px;
  }
  .tg-main-section {
    position: absolute;
    width: 36%;
    padding: 4% 5%;
    background: rgba(0, 66, 129, 0.8);
    right: 5%;
    margin-top: 50px;

    @media (max-width: 800px) {
      position: static;
      width: 100%;
      margin-top: 0;
    }

    .tg-sectiontitle {
      padding-bottom: 0;
      h2,
      h3 {
        color: #fff !important;
      }
    }

    .tg-themeform {
      font-weight: bold;
      textarea {
        height: 135px;
      }

      .tg-btn {
        border-color: #fff;
        span {
          color: #fff !important;
        }
      }
    }
  }
</style>
