<template>
  <v-container>
    <v-card>
      <v-container>
        <h1 class="basil--text">회원가입</h1>
        <v-form ref="form" v-model="valid" @click.prevent="onSubmitForm">
          <v-text-field
            v-model="email"
            label="이메일"
            type="email"
            :rules="emailRules"
            required
          />
          <v-text-field
            v-model="password"
            label="비밀번호"
            type="password"
            :rules="passwordRules"
            required
          />
          <v-text-field
            v-model="passwordCheck"
            label="비밀번호 확인"
            type="password"
            :rules="passwordCheckRules"
            required
          />
          <v-text-field
            v-model="nickname"
            label="닉네임"
            type="nickname"
            :rules="nicknameRules"
            required
          />
          <v-checkbox
            v-model="terms"
            label="동의해야 가입할 수 있음"
            :rules="checkRules"
            required
          />
          <v-btn class="ma-2" color="primary" type="submit" dark>
            Accept
            <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
          </v-btn>
          <v-btn class="ma-2" color="orange darken-2" nuxt to="/" dark>
            <v-icon dark left> mdi-arrow-left </v-icon>Back
          </v-btn>
        </v-form>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      email: "",
      password: "",
      passwordCheck: "",
      nickname: "",
      terms: false,
      passwordRules: [(v) => !!v || "비밀번호 입력은 필수입니다."],
      emailRules: [
        (v) => !!v || "이메일 입력은 필수입니다.",
        (v) => /.+@.+/.test(v) || "이메일이 유효하지 않습니다.",
      ],
      passwordCheckRules: [
        (v) => !!v || "비밀번호 확인은 필수입니다.",
        (v) => v === this.password || "비밀번호가 일치하지 않습니다.",
      ],
      checkRules: [(v) => !!v || "약관에 동의해야 합니다."],
      nicknameRules: [(v) => !!v || "닉네임은 필수입니다."],
    };
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    },
  },
  watch: {
    me(value, oldValue) {
      if (value) {
        this.$router.push({
          pah: "/",
        });
      }
    },
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        console.log("enter");
      }
    },
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
