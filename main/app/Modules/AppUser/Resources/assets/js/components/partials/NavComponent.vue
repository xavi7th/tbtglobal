<template>
  <nav>
    <router-link :to="{ name: 'site.root' }">Home</router-link>
  </nav>
</template>

<script>
  export default {
    name: "UserNav",
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
