<template>
  <div>
    <b-modal
      id="modal-signup-inform"
      size="sm"
      centered
      title="SIGNUP"
      @ok="onSubmit"
    >
      <div><h3 style="text-align: center">FOODINFOWEB</h3></div>
      <b-form-group>
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
        <b-form-input
          placeholder="거주지역"
          style="margin-bottom: 8px"
          v-model="location"
          required
        ></b-form-input>
        <b-form-input
          placeholder="닉네임"
          style="margin-bottom: 8px"
          v-model="nickname"
          required
        ></b-form-input>
        <b-form-input
          placeholder="이름"
          style="margin-bottom: 8px"
          v-model="name"
          required
        ></b-form-input>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      location: null,
      nickname: null,
      name: null,
    };
  },
  methods: {
    onSubmit() {
      const payload = {
        email: this.email,
        password: this.password,
        location: this.location,
        nickname: this.location,
        name: this.name,
      };
      this.email = null;
      this.password = null;
      this.location = null;
      this.nickname = null;
      this.name = null;
      this.$store.dispatch("authSignup", payload);
    },
  },
};
</script>

<style lang="scss" scoped></style>
