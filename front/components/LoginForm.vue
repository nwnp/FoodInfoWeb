<template>
  <v-container>
    <v-card style="width: 600px">
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <v-container>
          <!-- <v-subheader>로그인</v-subheader> -->
          <h1>로그인</h1>
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
            <v-icon style="margin-right: 10px" dark right>
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
            <v-icon style="margin-right: 10px" dark> mdi-wrench </v-icon>
            회원가입</v-btn
          >
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
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
    };
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        if (this.password === this.dummyPassword) {
          console.log(this.email);
          console.log(this.password);
          alert("로그인 성공!");
        } else {
          alert("비밀번호 틀림!");
        }
      }
    },
    // onLogOut() {
    //   this.email = "";
    //   this.password = "";
    //   alert("로그아웃 합니다.");
    // },
  },
};
</script>
