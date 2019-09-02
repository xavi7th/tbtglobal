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
        <router-link :to="{name: 'site.services'}" tag="li">
          <a>services</a>
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
    methods: {},
    mounted() {
      $("li").click(() => {
        console.log("clicked");
        $(".tg-btnnav").addClass("collapsed");
        $("#tg-navigation").removeClass("in");
      });
    }
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
