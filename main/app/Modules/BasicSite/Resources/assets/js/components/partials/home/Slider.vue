<template>
  <div id="tg-homeslider" class="tg-homeslider tg-haslayout">
    <figure class="item" v-for="slide in slides" :key="slide.name">
      <img :src="slide.img" alt="image description" />
      <figcaption>
        <div class="container">
          <div class="row">
            <div :class="`col-md-7 col-sm-10 col-xs-12 pull-${slide.position}`">
              <h1>{{ slide.small_text }}</h1>
              <h2>{{ slide.big_text }}</h2>
              <img class="tg-svginject" src="img/img-01.svg" alt="image description" />
              <div class="tg-description">
                <p>{{ slide.desc }}</p>
              </div>
              <div class="tg-btnsbox">
                <router-link class="tg-btn" :to="{name: 'site.root'}">
                  <span>View services</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slides: {}
      };
    },
    beforeCreate() {
      axios.get("/api/sliders").then(rsp => {
        if (rsp.status == 200) {
          this.slides = rsp.data.slides.rows;
        }
      });
    },
    mounted() {
      window.vueEventBus.$on("mainjs-loaded", function() {
        console.log("mainjs-loaded");

        setTimeout(() => {
          window.vueEventBus.$emit("slide-loaded");
        }, 1000);
      });
    }
  };
</script>

<style lang="scss" scoped>
  .tg-btn {
    color: #fff;
    border-color: #fff;

    &:hover {
      border-color: #004281;
    }
  }

  .tg-description {
    color: #fff;
  }
  // 	.tg-404content h2 .tg-svginject image, .tg-svginject path {
  //     fill: #004281 !important;
  // }
</style>

<style>
  .tg-404content h2 .tg-svginject image,
  .tg-svginject path {
    fill: #fff !important;
  }
</style>
