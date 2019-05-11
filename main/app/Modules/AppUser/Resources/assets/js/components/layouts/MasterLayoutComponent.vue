<template>

  <div id="main-controller">

      <site-header  v-on:logout-user="logoutUser()"></site-header>

      <site-nav></site-nav>

      <div id="page-contents">

        <slot name="content-section"></slot>

      </div>

      <site-footer></site-footer>

  </div>

</template>

<script>
import SiteHeader from "../partials/HeaderComponent";
import SiteNav from "../partials/NavComponent";
import SiteFooter from "../partials/FooterComponent";
import { logout } from "../../config/endpoints.js";

export default {
  name: "MasterLayout",
  created() {},
  data() {
    return {};
  },
  components: {
    SiteHeader,
    SiteFooter,
    SiteNav
  },
  methods: {
    logoutUser() {
      logout("Could not retrieve user details. Logging you out.");
    }
  }
};
</script>
<style scoped>
div#main-controller {
  padding: 5%;
  min-height: 100vh;
  position: relative;
  background: #f1962e;
}
</style>
