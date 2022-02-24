<template>
  <v-app>
    <nav>
      <v-toolbar color="#7291ed" dense dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>
          <nuxt-link to="/">FoodInfo Web</nuxt-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-text-field
            label="검색"
            prepend-icon="mdi-magnify"
            :style="{ display: 'flex', alginItems: 'center' }"
          />
          <v-btn
            text
            nuxt
            to="/profile"
            :style="{ display: 'flex', alignItems: 'center' }"
          >
            <div>Profile</div>
          </v-btn>
          <v-btn text nuxt to="/signup">
            <div>회원가입</div>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </nav>
    <v-container>
      <v-row>
        <v-col cols="12" xs="12" md="4">
          <login-form />
        </v-col>
        <v-col cols="12" xs="12" md="8">
          <nuxt />
        </v-col>
      </v-row>
    </v-container>
    <footer-form />
  </v-app>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import FooterForm from "../components/FooterForm.vue";

export default {
  components: {
    LoginForm,
    FooterForm,
  },
};
</script>
