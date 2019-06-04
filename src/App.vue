<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed v-model="drawer" app>
      <v-list dense>
        <router-link v-bind:to="{ name: 'Home'}" class="side_bar_link">
          <v-list-title>
            <v-list-title-action>
              <v-icon>home</v-icon>
            </v-list-title-action>
            <v-list-title-content>Home</v-list-title-content>
          </v-list-title>
        </router-link>
        <router-link v-bind:to="{ name: 'Contact'}" class="side_bar_link">
          <v-list-title>
            <v-list-title-action>
              <v-icon>contact_mail</v-icon>
            </v-list-title-action>
            <v-list-title-content>Contact</v-list-title-content>
          </v-list-title>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Home</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-bind:to="{ name: 'AddMovie'}">Add Movie</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <div id="app">
          <router-view/>
        </div>
      </v-container>
    </v-content>
    <v-footer color="#42b983" app>
      <span class="white--text"> &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import './assets/stylesheets/main.css';

export default {
  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  },
};
</script>
