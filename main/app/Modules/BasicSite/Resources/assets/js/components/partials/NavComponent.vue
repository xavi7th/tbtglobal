<template>
  <mdb-navbar :color="'primary'" position="top" dark href="#" transparent scrolling>
    <mdb-container>
      <mdbNavbarBrand href="#">
        <strong>MDB</strong>
      </mdbNavbarBrand>
      <mdb-navbar-toggler style="max-width: 1140px">
        <mdb-navbar-nav left>
          <mdb-nav-item href="#" waves-fixed active>Home</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>Pricing</mdb-nav-item>
        </mdb-navbar-nav>
        <form>
          <mdb-input
            type="text"
            class="text-white"
            placeholder="Search"
            aria-label="Search"
            label
            navInput
            waves
            waves-fixed
          />
        </form>
      </mdb-navbar-toggler>
    </mdb-container>
  </mdb-navbar>
</template>

<script>
  import {
    Container as mdbContainer,
    Navbar as mdbNavbar,
    NavbarItem as mdbNavItem,
    NavbarNav as mdbNavbarNav,
    NavbarCollapse as mdbNavbarToggler,
    Input as mdbInput,
    NavbarBrand as mdbNavbarBrand
  } from "mdbvue";
  export default {
    name: "Nav",
    components: {
      mdbContainer,
      mdbNavbar,
      mdbNavItem,
      mdbNavbarNav,
      mdbNavbarToggler,
      mdbInput,
      mdbNavbarBrand
    },
    data() {
      return {};
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
</style>
