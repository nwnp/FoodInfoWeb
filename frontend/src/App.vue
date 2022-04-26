<template>
  <div id="app">
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand href="/">FOODINFOWEB</b-navbar-brand>
      <div style="display: flex; flexdirection: column">
        <b-dropdown id="dropdown-1" text="페이지 이동" class="m-md-2" size="sm">
          <b-dropdown-item href="/">메인 페이지</b-dropdown-item>
          <b-dropdown-item href="/about">공지사항</b-dropdown-item>
          <b-dropdown-item href="/posts">게시글</b-dropdown-item>
        </b-dropdown>

        <div v-if="!valid">
          <b-nav-item-dropdown text="로그인" right>
            <b-dropdown-item @click="onClickSignup">회원가입</b-dropdown-item>
            <b-dropdown-item @click="onClick">로그인하기</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
        <div v-else>
          <b-nav-item-dropdown text="나" right>
            <b-dropdown-item @click="onClickLogout">로그아웃</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
      </div>
    </b-navbar>

    <div style="margin: 15px">
      <div style="margin: 0 auto">
        <input
          type="text"
          id="search"
          style="
            border: solid 1px;
            border-radius: 20px;
            width: 50%;
            height: 40px;
            text-align: center;
          "
          placeholder="음식 입력"
        />
        <div style="margin: 2px; width: 60%; display: inline-block">
          <h5 style="display: inline-block; margin: 3px" @click="onClick">
            <b-badge>#biotine</b-badge>
          </h5>
          <h5 style="display: inline-block; margin: 3px">
            <b-badge>#Fe</b-badge>
          </h5>
          <h5 style="display: inline-block; margin: 3px">
            <b-badge>#Maca</b-badge>
          </h5>
          <h5 style="display: inline-block; margin: 3px">
            <b-badge>#아연</b-badge>
          </h5>
          <h5 style="display: inline-block; margin: 3px">
            <b-badge>#Omega-3</b-badge>
          </h5>
        </div>
      </div>
    </div>

    <div v-if="valid">
      <b-card
        title="내 정보"
        tag="article"
        style="max-width: 20rem; min-width: 15rem; display: inline-block"
        class="mb-2"
        width="20rem"
      >
        <div style="margin: 3px">
          <b-avatar size="4rem"></b-avatar>
          <p>{{ user.nickname }}</p>
          <b-badge style="display: inline-block; margin: 3px"
            >팔로잉 {{ following }}</b-badge
          >
          <b-badge style="display: inline-block; margin: 3px"
            >팔로잉 {{ follower }}</b-badge
          >
        </div>
        <b-button
          style="margin: 3px"
          variant="primary"
          size="sm"
          @click="onClickLogout"
          >LOGOUT</b-button
        >
      </b-card>
    </div>
    <div v-else>
      <b-card
        title="로그인"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; display: inline-block"
        class="mb-2"
      >
        <b-card-text>
          로그인을 하지 않아도 게시글과 푸드정보를 얻을 수는 있지만, 게시글
          등록이나 푸드마크를 할 수 없습니다.
        </b-card-text>
        <b-form-group>
          <b-form-input
            placeholder="이메일"
            v-model="email"
            style="margin: 8px"
            required
          ></b-form-input>
          <b-form-input
            placeholder="패스워드"
            type="password"
            v-model="password"
            style="margin: 8px"
            required
          ></b-form-input>
          <b-button variant="primary" @click="onClickLogin">LOGIN</b-button>
        </b-form-group>
      </b-card>
    </div>

    <router-view />
    <loginInform />
    <signupInform />
  </div>
</template>

<script>
import loginInform from "./views/user/userInform.vue";
import signupInform from "./views/user/signupInform.vue";

export default {
  components: {
    loginInform: loginInform,
    signupInform: signupInform,
  },
  data() {
    return {
      user: {},
      valid: false,
      email: null,
      password: null,
      // nickname: "pa12",
      following: 30,
      follower: 40,
    };
  },
  computed: {
    me() {
      return this.$store.getters.me;
    },
  },
  created() {
    this.searchUserLocalStorage();
  },
  methods: {
    searchUserLocalStorage() {
      if (localStorage.token) {
        this.valid = true;
        this.user = JSON.parse(window.localStorage.getItem("token"));
      } else {
        this.valid = false;
      }
    },
    onClick() {
      // console.log("biotine");
      this.$bvModal.show("modal-login-inform");
    },
    onClickLogin() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("authLogin", payload);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
    onClickLogout() {
      window.localStorage.removeItem("token");
      this.valid = false;
    },
    onClickSignup() {
      this.$bvModal.show("modal-signup-inform");
    },
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>
