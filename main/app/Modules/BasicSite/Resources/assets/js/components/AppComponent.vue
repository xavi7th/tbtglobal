<template>
  <div id="tg-wrapper" class="tg-wrapper tg-haslayout">
    <site-header v-on:logout-user="logoutUser()"></site-header>

    <transition name="slide-out-in" mode="out-in" :duration="{ enter: 1300, leave: 200 }">
      <router-view @page-loaded="pageLoaded"></router-view>
    </transition>

    <site-footer></site-footer>
  </div>
</template>

<script>
  import Loader from "@components/misc/LoaderComponent";
  import SiteHeader from "@components/partials/HeaderComponent";
  import SiteFooter from "@components/partials/FooterComponent";
  import { logout } from "@assets/js/config/endpoints.js";

  export default {
    name: "App",
    components: {
      SiteFooter,
      SiteHeader
    },
    created() {},
    data() {
      return {};
    },
    methods: {
      logoutUser() {
        logout("Could not retrieve user details. Logging you out.");
      },
      pageLoaded() {
        this.$loadScript("/js/main.js");
      }
    }
  };
</script>

<style media="screen">
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition-duration: 0.5s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    overflow: hidden;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(2em, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(-2em, 0);
  }

  .slide-out-in-enter-active {
    transition: all 0.3s ease;
  }

  .slide-out-in-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-out-in-enter,
  .slide-out-in-leave-to {
    transform: translateX(80%);
    opacity: 0;
  }
</style>
