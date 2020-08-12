<template>
  <footer id="tg-footer" class="tg-footer tg-haslayout">
    <div class="tg-footermiddlearea">
      <div class="container">
        <div class="row">
          <div class="tg-footerwidgets">
            <div class="col-md-6 col-sm-12 col-xs-12">
              <div class="tg-widget tg-widgetinfo">
                <div id="tg-footerlocation-map" class="tg-footerlocation-map" v-if="!isContactPage">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.170341675013!2d5.764113715200978!3d5.541741335332661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041ad7bc9b5f72b%3A0x2cff4bbb9faab27a!2s106%20Airport%20Road%2C%20Warri!5e0!3m2!1sen!2sng!4v1566875115241!5m2!1sen!2sng"
                    frameborder="0"
                    style="border:0; height:auto; width:100%;"
                    allowfullscreen
                  ></iframe>
                </div>
                <div class="footer-address">
                  <h4>Office Address</h4>
                  <ul class="tg-contactinfo">
                    <li>
                      <i class="fa fa-home"></i>
                      <address>
                        <b>Head Office:</b> Plot 106 Airport Road, Warri, Delta State.
                        <br />
                        <b>Branch Office:</b> No 8 Atuwatse close, ubeji, Warri. Delta State.
                      </address>
                    </li>

                    <li>
                      <i class="fa fa-envelope-o"></i>
                      <span>
                        <a href="mailto:info@tbtnigeria.com">info@tbtnigeria.com</a>
                      </span>
                    </li>
                    <li>
                      <i class="fa fa-envelope-o"></i>
                      <span>
                        <a href="mailto:tbtglobal@yahoo.com">tbtglobal@yahoo.com</a>
                      </span>
                    </li>
                    <li>
                      <i class="fa fa-envelope-o"></i>
                      <span>
                        <a href="mailto:tbtglobal2@gmail.com">tbtglobal2@gmail.com</a>
                      </span>
                    </li>
                    <li>
                      <i class="fa fa-phone"></i>
                      <span>
                        <a href="tel:+234 805 986 1188">+234 805 986 1188</a>
                      </span>
                    </li>
                    <li>
                      <i class="fa fa-phone"></i>
                      <span>
                        <a href="tel:+234 703 356 5330">+234 703 356 5330</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <div class="tg-widget tg-widgetusefulllinks">
                <div class="tg-widgettitle">
                  <h3>useful links</h3>
                </div>
                <ul>
                  <li>
                    <router-link :to="{name: 'site.root'}">Home</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'site.about'}">About</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'site.services'}">Services</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'site.projects'}">Projects</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'site.contact'}">Contact Us</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tg-footerbottombar">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-xs-12">
            <span class="tg-copyright">&copy; 2016 - 2019 | All Rights Reserved</span>
            <ul class="tg-socialicons">
              <li>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-facebook-f"></i>
                </a>
              </li>
              <!-- <li>
                <a href="#">
                  <i class="fa fa-pinterest-p"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
              </li>-->
            </ul>
            <strong class="tg-logo">
              <a>
                <!-- <img src="img/logo.png" alt="image description" /> -->
              </a>
            </strong>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
    props: ["isContactPage"]
  };
</script>

<style lang="css">
  .tg-footerwidgets .tg-widget.tg-widgetinfo,
  .tg-widget {
    padding: 40px 0;
    display: flex;
  }

  .tg-widget {
    flex-direction: column;
  }

  .tg-widget ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .tg-widget ul li {
    width: auto;
  }

  .tg-footerwidgets .tg-widget ul li + li {
    border-color: transparent;
  }

  .tg-widgetusefulllinks ul li:first-child {
    padding-top: 20px;
  }

  .footer-address {
    margin-top: 20px;
  }
</style>
