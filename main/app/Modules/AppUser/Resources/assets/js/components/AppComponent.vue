<template>
  <div class="flexible-content">
    <!--Header-->
    <user-header v-on:logout-user="logoutUser()"></user-header>
    <!--/.Header-->

    <!-- Sidebar -->
    <user-nav v-on:logout-user="logoutUser()"></user-nav>
    <!-- /Sidebar  -->

    <main>
      <div class="mt-5 p-5">
        <transition name="slide-out-in" mode="out-in" :duration="{ enter: 500, leave: 400 }">
          <router-view></router-view>
        </transition>
      </div>
      <user-footer></user-footer>
    </main>
  </div>
</template>

<script>
  // import Loader from "@dashboardComponents/misc/LoaderComponent";
  import UserNav from "@dashboardComponents/partials/NavComponent";
  import UserFooter from "@dashboardComponents/partials/FooterComponent";
  import UserHeader from "@dashboardComponents/partials/HeaderComponent";
  import { logout } from "@dashboardAssets/js/config/endpoints.js";

  // import { waves } from "mdbvue";

  export default {
    name: "App",
    components: {
      UserNav,
      UserFooter,
      UserHeader
    },
    // mixins: [waves],
    methods: {
      logoutUser() {
        logout("Could not retrieve user details. Logging you out.");
      }
    }
  };
</script>

<style scoped lang="scss">
  main {
    background-color: #ededee;
  }

  .flexible-content {
    transition: padding-left 0.3s;
    padding-left: 270px;

    @media (max-width: 1199.98px) {
      padding-left: 0;
    }
  }

  .flexible-navbar {
    transition: padding-left 0.5s;
    padding-left: 270px;

    @media (max-width: 1199.98px) {
      padding-left: 10px;
    }
  }
</style>
<style>
  .navbar-light .navbar-brand {
    margin-left: 15px;
    color: #2196f3 !important;
    font-weight: bolder;
  }
</style>
