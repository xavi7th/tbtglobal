<template>
  <section class="tg-main-section tg-haslayout">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-xs-12">
          <div class="tg-getadvice">
            <router-link class="tg-btn" :to="{name: 'site.contact'}">
              <span>Get Advice</span>
            </router-link>
            <p>
              Contact us for information or any queries related to the
              <strong>OIL &amp; GAS Industry</strong>
            </p>
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
  .tg-main-section {
    background-image: url("/img/parallax/bgparallax-02.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: top;
  }
</style>
