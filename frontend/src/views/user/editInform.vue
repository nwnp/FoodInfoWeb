<template>
  <div>
    <b-modal id="modal-user-edit-inform" size="sm" centered @ok="onSubmit">
      <div><h3 style="text-align: center">FOODINFOWEB</h3></div>
      <b-form-group>
        <b-form-input
          placeholder="닉네임 수정"
          v-model="nickname"
          style="margin-bottom: 8px"
          required
        ></b-form-input>
        <b-form-input
          placeholder="거주지역 수정"
          v-model="location"
          style="margin-bottom: 8px"
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
      nickname: null,
      location: null,
    };
  },
  methods: {
    onSubmit() {
      const payload = {
        email: JSON.parse(window.localStorage.getItem("token"))["email"],
        nickname: this.nickname,
        location: this.location,
      };
      this.$store.dispatch("actUserEdit", payload);
    },
  },
};
</script>
