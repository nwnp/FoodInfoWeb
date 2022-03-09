<template>
  <v-app>
    <nav>
      <v-toolbar color="#7291ed" dense dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>
          <h1>
            <a href="/main" style="text-decoration: none; color: white"
              >FoodInfo Web</a
            >
          </h1>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-text-field
            label="검색"
            prepend-icon="mdi-magnify"
            :style="{ display: 'flex', alginItems: 'center' }"
          />
        </v-toolbar-items>
        <v-toolbar-items>
          <!-- <v-btn
            text
            nuxt
            to="/profile"
            :style="{ display: 'flex', alignItems: 'center' }"
          >
            <div>Profile</div>
          </v-btn> -->

          <v-container fluid style="height: 300px">
            <v-row justify="center">
              <v-menu bottom min-width="200px" rounded offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn icon x-large v-on="on">
                    <v-avatar color="indigo" size="30">
                      <span class="white--text text-h5">{{
                        user.nickname
                      }}</span>
                    </v-avatar>
                  </v-btn>
                </template>
                <v-card>
                  <v-list-item-content class="justify-center">
                    <div class="mx-auto text-center">
                      <v-avatar color="primary" size="20">
                        <span class="white--text text-h5">{{
                          user.nickname
                        }}</span>
                      </v-avatar>
                      <p class="text-caption mt-1">
                        {{ user.email }}
                      </p>
                      <v-divider class="my-3"></v-divider>
                      <v-btn nuxt to="/profile" depressed rounded text>
                        Edit Profile
                      </v-btn>
                    </div>
                  </v-list-item-content>
                </v-card>
              </v-menu>
            </v-row>
          </v-container>

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
        <v-col cols="12" xs="12" md="8"> <nuxt /> </v-col>
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
  data: () => ({
    user: {
      nickname: "jw",
      email: "jin@jin.com",
    },
  }),
};
</script>
