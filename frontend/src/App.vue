<template>
  <div id="app">
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand href="/">FOODINFOWEB</b-navbar-brand>
      <div style="display: flex; flexdirection: column">
        <!-- search 알고리즘이 완성되면 진행 -->
        <!-- <b-nav-form>
          <b-input-group class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              type="search"
              placeholder="Search terms"
            ></b-form-input>
          </b-input-group>
        </b-nav-form> -->

        <b-dropdown id="dropdown-1" text="페이지 이동" class="m-md-2" size="sm">
          <b-dropdown-item href="/">메인 페이지</b-dropdown-item>
          <b-dropdown-item href="/about">공지사항</b-dropdown-item>
        </b-dropdown>

        <div v-if="me">
          <b-nav-item-dropdown text="로그인" right>
            <b-dropdown-item href="/signup">회원가입</b-dropdown-item>
            <b-dropdown-item @click="onClick">로그인하기</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
        <div v-else>
          <b-nav-item-dropdown text="나" right>
            <b-dropdown-item href="#">로그아웃</b-dropdown-item>
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
    return {
      me: true,
    };
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
