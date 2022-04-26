<template>
  <div>
    <b-modal
      id="modal-login-inform"
      size="sm"
      centered
      title="LOGIN"
      @ok="onSubmit"
    >
      <div><h3 style="text-align: center">FOODINFOWEB</h3></div>
      <b-form-group style="margin: 8px">
        <b-form-input
          placeholder="이메일"
          v-model="email"
          style="margin-bottom: 8px"
          required
        ></b-form-input>
        <b-form-input
          placeholder="패스워드"
          type="password"
          style="margin-bottom: 8px"
          v-model="password"
          required
        ></b-form-input>
      </b-form-group>
      <div style="text-align: right">
        <b-button size="sm" style="margin: 3px" href="/finding">
          이메일 / 비밀번호 찾기
        </b-button>
        <b-button
          size="sm"
          style="margin: 3px"
          variant="outline-primary"
          href="/signup"
        >
          회원가입
        </b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    onSubmit() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      if (payload.email == null || payload.password == null) {
        alert("아이디와 패스워드는 필수 입력란입니다.");
        this.email = null;
        this.password = null;
        return;
      }
      this.email = null;
      this.password = null;
      console.log(payload);
    },
  },
};
</script>

<style lang="scss" scoped></style>
