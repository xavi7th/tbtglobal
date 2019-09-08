<template>
  <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="primary" dark app fixed>
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="$emit('update:drawer', !drawer)"></v-toolbar-side-icon>
      <span class="hidden-sm-and-down">TBT Global</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <!-- <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>-->
    <v-btn icon large>
      <v-avatar size="32px" tile>
        <img src="/img/logo.png" alt="user" @click="$emit('logout-user')" />
      </v-avatar>
    </v-btn>
  </v-toolbar>
</template>

<script>
  export default {
    name: "AdminHeader",
    props: {
      drawer: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        // drawer: null
      };
    }
  };
</script>

<style lang="css">
  header {
    color: aliceblue;
  }
</style>
