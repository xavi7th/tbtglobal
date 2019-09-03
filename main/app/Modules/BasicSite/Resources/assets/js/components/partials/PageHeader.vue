<template>
  <div id="tg-innerbanner" class="tg-innerbanner tg-haslayout">
    <div class="tg-parallaximg"></div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="tg-innerbannercontent">
            <div class="tg-pagetitle">
              <h1>{{ title }}</h1>
            </div>
            <ol class="tg-breadcrumb">
              <li>
                <a href="#">
                  <i class="fa fa-home"></i>
                </a>
              </li>
              <li class="tg-active">{{ titleSlug }}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["title"],

    methods: {
      strToSlug(str) {
        console.log(str);

        return str.replace(/[^\w ]+/g, "").replace(/ +/g, "-");
      }
    },
    computed: {
      titleSlug() {
        return this.strToSlug(this.title);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .tg-parallaximg {
    background-image: url("/img/parallax/bgparallax-03.jpg");
    background-size: cover;
    background-position: center;
  }
</style>
