<template>
  <div class="sidebar-fixed position-fixed">
    <a class="logo-wrapper">
      <img alt class="img-fluid" src="@dashboardAssets/images/logo-mdb-vue-small.png">
    </a>
    <mdb-list-group class="list-group-flush">
      <router-link to="/dashboard" @click.native="activeItem = 1">
        <mdb-list-group-item :action="true" :class="activeItem === 1 && 'active'">
          <mdb-icon icon="pie-chart" class="mr-3"/>Dashboard
        </mdb-list-group-item>
      </router-link>
      <router-link to="/dashboard/profile" @click.native="activeItem = 2">
        <mdb-list-group-item :action="true" :class="activeItem === 2 && 'active'">
          <mdb-icon icon="user" class="mr-3"/>Profile
        </mdb-list-group-item>
      </router-link>
      <router-link to="/tables" @click.native="activeItem = 3">
        <mdb-list-group-item :action="true" :class="activeItem === 3 && 'active'">
          <mdb-icon icon="table" class="mr-3"/>Tables
        </mdb-list-group-item>
      </router-link>
      <router-link to="/maps" @click.native="activeItem = 4">
        <mdb-list-group-item :action="true" :class="activeItem === 4 && 'active'">
          <mdb-icon icon="map" class="mr-3"/>Maps
        </mdb-list-group-item>
      </router-link>
      <router-link to="/404" @click.native="activeItem = 5">
        <mdb-list-group-item :action="true" :class="activeItem === 5 && 'active'">
          <mdb-icon icon="exclamation" class="mr-3"/>404
        </mdb-list-group-item>
      </router-link>
    </mdb-list-group>
  </div>
</template>

<script>
  import {
    ListGroup as mdbListGroup,
    Fa as mdbIcon,
    ListGroupItem as mdbListGroupItem
  } from "mdbvue";
  export default {
    name: "UserNav",
    components: {
      mdbListGroup,
      mdbIcon,
      mdbListGroupItem
    },
    computed: {
      activeItem: {
        get() {
          return this.$route.matched[0]
            ? this.$route.matched[0].props.default.page
            : 1;
        },
        set() {}
      }
    }
  };
</script>

<style lang="scss" scoped>
  .sidebar-fixed {
    left: 0;
    top: 0;
    height: 100vh;
    width: 270px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    z-index: 1050;
    background-color: #fff;
    padding: 1.5rem;
    padding-top: 0;

    @media (max-width: 1199.98px) {
      display: none;
    }

    .logo-wrapper {
      img {
        width: 100%;
        padding: 2.5rem;
      }
    }

    .list-group-item {
      display: block !important;
      transition: background-color 0.3s;
    }

    .list-group {
      .active {
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
          0 2px 10px 0 rgba(0, 0, 0, 0.12);
        border-radius: 5px;
      }
    }
  }
</style>
