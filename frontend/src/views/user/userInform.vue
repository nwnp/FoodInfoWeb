<template>
  <div>
    <b-modal id="modal-login-inform" title="로그인" @ok="onSubmit">
      <b-form-group>
        <b-form-input
          placeholder="이메일"
          v-model="email"
          required
        ></b-form-input>
        <b-form-input
          placeholder="패스워드"
          v-model="password"
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
    };
  },
  methods: {
    onSubmit() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      console.log(payload);
    },
  },
};
</script>

<style lang="scss" scoped></style>
