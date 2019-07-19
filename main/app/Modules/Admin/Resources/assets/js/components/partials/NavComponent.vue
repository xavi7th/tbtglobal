<template>
  <v-navigation-drawer v-model="drawerState" :clipped="$vuetify.breakpoint.lgAndUp" fixed app>
    <v-list dense>
      <template v-for="item in items">
        <v-layout v-if="item.heading" :key="item.heading" row align-center>
          <v-flex xs6>
            <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
          </v-flex>
          <v-flex xs6 class="text-xs-center">
            <a href="#!" class="body-2 black--text">{{item.text}}</a>
          </v-flex>
        </v-layout>
        <v-list-group
          v-else-if="item.children"
          :key="item.text"
          v-model="item.model"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-tile v-for="(child, i) in item.children" :key="i" @click="true">
            <v-list-tile-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ child.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile v-else :key="item.text" :to="item.url" color="black" ripple>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "AdminNav",
    props: {
      drawer: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        items: [
          { heading: "DASHBOARD", text: "Admin" },
          {
            icon: "store",
            text: "Dashboard",
            url: { name: "admin.dashboard" }
          },
          {
            icon: "dashboard",
            text: "Manage Sliders",
            url: { name: "admin.sliders" }
          },
          {
            icon: "calendar_view_day",
            text: "Manage Projects",
            url: { name: "admin.projects" }
          },
          {
            icon: "people",
            text: "Manage Team Members",
            url: { name: "admin.team_members" }
          },
          {
            icon: "people_outline",
            text: "Manage Clients",
            url: { name: "admin.clients" }
          }
          // { icon: "history", text: "Frequently contacted" },
          // { icon: "content_copy", text: "Duplicates" },
          // {
          //   icon: "keyboard_arrow_up",
          //   "icon-alt": "keyboard_arrow_down",
          //   text: "Labels",
          //   model: true,
          //   children: [{ icon: "add", text: "Create label" }]
          // },
          // {
          //   icon: "keyboard_arrow_up",
          //   "icon-alt": "keyboard_arrow_down",
          //   text: "More",
          //   model: false,
          //   children: [
          //     { text: "Import" },
          //     { text: "Export" },
          //     { text: "Print" },
          //     { text: "Undo changes" },
          //     { text: "Other contacts" }
          //   ]
          // },
          // { icon: "settings", text: "Settings" },
          // { icon: "chat_bubble", text: "Send feedback" },
          // { icon: "help", text: "Help" },
          // { icon: "phonelink", text: "App downloads" },
          // { icon: "keyboard", text: "Go to the old version" }
        ]
      };
    },
    computed: {
      drawerState: {
        get() {
          return this.drawer;
        },
        set(val) {
          this.$emit("update:drawer", val);
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
