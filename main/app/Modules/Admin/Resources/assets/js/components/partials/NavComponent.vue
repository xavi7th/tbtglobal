<template>
  <mdb-navbar
    style="margin-top: 60px"
    :color="'primary'"
    position="top"
    dark
    href="#"
    transparent
    scrolling
  >
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
  export default {
    name: "AdminNav",
    data() {
      return {};
    },
    methods: {
      setActive(num, comp) {
        this.isActive = num;
        this.$emit("go-to", {
          comp
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  a {
    color: white;
  }
</style>
