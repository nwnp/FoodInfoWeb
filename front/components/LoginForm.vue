<template>
  <v-container v-if="!me">
    <v-card style="width: 600px">
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <v-container>
          <!-- <v-subheader>로그인</v-subheader> -->
          <v-card-title class="basil--text">Login</v-card-title>
          <v-text-field
            label="이메일"
            type="email"
            v-model="email"
            :rules="emailRules"
            required
          />
          <v-text-field
            label="비밀번호"
            type="password"
            v-model="password"
            :rules="passwordRules"
            required
          />
          <v-btn
            class="ma-2"
            color="primary"
            type="submit"
            :disabled="!valid"
            style="margin-right: 20px; margin-bottom: 10px"
            dark
          >
            <v-icon style="margin-right: 3px" dark right>
              mdi-checkbox-marked-circle
            </v-icon>
            login</v-btn
          >
          <v-btn
            class="ma-2"
            color="primary"
            style="margin-bottom: 10px"
            nuxt
            to="/signup"
            dark
          >
            <v-icon dark> mdi-wrench </v-icon>
            회원가입</v-btn
          >
        </v-container>
      </v-form>
    </v-card>
  </v-container>
  <v-container v-else>
    <v-card>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm2">
        <v-container>
          <v-card-title>Logout</v-card-title>
          <p>{{ nickname }}님 안녕하세요 😀</p>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import MainForm from "./MainForm.vue";

export default {
  components: {
    MainForm,
  },
  data() {
    return {
      email: "",
      password: "",
      dummyPassword: "123",
      valid: false,
      emailRules: [
        (v) => !!v || "이메일이 유효하지 않습니다.",
        (v) => /.+@.+/.test(v) || "이메일이 유효하지 않습니다.",
      ],
      passwordRules: [(v) => !!v || "비밀번호는 필수입니다."],
      state: true,
      nickname: "pa12",
    };
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    },
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("users/logIn", {
            email: this.email,
            password: this.password,
          })
          .then(() => {
            this.state = !this.state;
            this.$router.push({
              path: "/main",
            });
          })
          .catch(() => {
            alert("로그인 실패");
          });
      }
    },
    onSubmitForm2() {},
    // onLogOut() {
    //   this.email = "";
    //   this.password = "";
    //   alert("로그아웃 합니다.");
    // },
  },
};
</script>
<style>
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #7291ed !important;
}
</style>
