<template>
  <nav>
    <router-link :to="{ name: 'site.root' }" class="item" active-class="active">
      <i class="users icon"></i>
      Home
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: "AdminAltNav",
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
  .item {
    i {
      padding-right: 2px;
    }
  }

  .header {
    color: white;
  }
</style>
