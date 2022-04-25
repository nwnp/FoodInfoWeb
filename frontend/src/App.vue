<template>
  <div id="app">
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <div style="display: flex; flexdirection: column; baseline: center">
        <b-nav-form>
          <b-input-group class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              type="search"
              placeholder="Search terms"
            ></b-form-input>
          </b-input-group>
        </b-nav-form>

        <b-dropdown id="dropdown-1" text="페이지 이동" class="m-md-2">
          <b-dropdown-item href="/">메인 페이지</b-dropdown-item>
          <b-dropdown-item href="/about">ABOUT</b-dropdown-item>
        </b-dropdown>

        <div>
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item @click="onClick">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
      </div>
    </b-navbar>
    <router-view />
    <loginInform />
  </div>
</template>

<script>
import loginInform from "./views/user/userInform.vue";

export default {
  components: {
    loginInform: loginInform,
  },
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.$bvModal.show("modal-login-inform");
    },
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>
