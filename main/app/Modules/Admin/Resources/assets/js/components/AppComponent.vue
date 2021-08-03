<template>
  <v-app id="inspire">
    <site-nav v-on:logout-user="logoutUser()" v-if="isNotLogin" :drawer.sync="drawer"></site-nav>

    <site-header v-on:logout-user="logoutUser()" v-if="isNotLogin" :drawer.sync="drawer" :app="app"></site-header>

    <v-content>
      <transition name="slide-out-in" mode="out-in" :duration="{ enter: 1300, leave: 200 }">
        <router-view class="mt-2"></router-view>
      </transition>
    </v-content>

    <site-footer :app="app"></site-footer>
  </v-app>
</template>

<script>
  import Loader from "@adminComponents/misc/LoaderComponent";
  import SiteNav from "@adminComponents/partials/NavComponent";
  import SiteHeader from "@adminComponents/partials/HeaderComponent";
  import SiteFooter from "@adminComponents/partials/FooterComponent";
  import { logout } from "@adminAssets/js/config/endpoints.js";

  export default {
    name: "App",
    components: {
      SiteFooter,
      SiteNav,
      SiteHeader
    },
    props: {
      source: String
    },
    data: () => ({
      dialog: false,
      drawer: true
    }),

    methods: {
      logoutUser() {
        logout();
      }
    },
    computed: {
      isNotLogin() {
        return this.$route.name !== "admin.login";
      },
      app(){
        return window.app
      }
    }
  };
</script>

<style media="screen">
  @import "~vuetify/dist/vuetify.min.css";
  .w-100 {
    width: 100% !important;
  }
  .mt-5 {
    margin-top: 5em !important;
  }
  .mt-2 {
    margin-top: 2em !important;
  }
</style>
