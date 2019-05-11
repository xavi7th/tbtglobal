<template>


<master-layout>

      <template slot="content-section">

        <transition name="page" mode="out-in">

          <router-view/>

        </transition>


      </template>

    </master-layout>

</template>

<script>
import MasterLayout from "./layouts/MasterLayoutComponent";
import Loader from "./misc/LoaderComponent";

export default {
  name: "UserApp",
  components: {
    pageLoading: Loader,
    MasterLayout
  },
  created() {},
  data() {
    return {};
  },
  mounted() {
    console.log("Main App Component mounted.");
  }
};
</script>

<style media="screen">
</style>
