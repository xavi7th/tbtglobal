<template>
  <div>
    <transition name="slide-out-in" mode="out-in" :duration="{ enter: 1300, leave: 200 }">
      <div class="main" v-if="isServicesPage">Hello</div>
      <router-view v-else></router-view>
    </transition>
  </div>
</template>

<script>
  import pageLoad from "@assets/js/config/pageload.mixin";
  export default {
    name: "HomePage",
    mixins: [pageLoad],
    computed: {
      isServicesPage() {
        return this.$route.name == "site.services";
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
