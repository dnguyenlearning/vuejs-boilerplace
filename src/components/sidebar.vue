<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="mini"
    fixed
    clipped
    hide-overlay
    light
    :app="isShow"
  >
    <v-list class="pa-1">
      <v-list-tile v-if="mini" @click.stop="mini = !mini">
        <v-list-tile-action>
          <v-icon>chevron_right</v-icon>
        </v-list-tile-action>
      </v-list-tile>

      <v-list-tile avatar tag="div">
        <v-list-tile-avatar>
          <img src="https://randomuser.me/api/portraits/men/85.jpg">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>John Leider</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon @click.stop="mini = !mini">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider light></v-divider>

      <v-list-tile v-for="item in items" :to="item.link" :key="item.title" @click="linkClick">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile style="cursor: pointer" @click="signout">
        <v-list-tile-action>
          <v-icon>logout</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props:{
    isShow: {
      type: Boolean
    }
  },
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "dashboard" , link: "/dashboard" },
        { title: "About", icon: "help", link: "/about" }
      ],
      mini: false,
      right: null
    };
  },
  methods: {
    signout(){
      this.$store.dispatch("users/logout");
      this.$router.push({
        name: "login"
      })
    },
    linkClick() {},
    toggleDrawler() {
      this.drawler = !this.drawler;
    }
  }
};
</script>