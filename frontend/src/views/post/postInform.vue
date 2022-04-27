<template>
  <div>
    <b-modal
      id="modal-post-inform"
      size="sm"
      centered
      title="POST"
      @ok="onSubmit"
    >
      <div><h3 style="text-align: center">FOODINFOWEB</h3></div>
      <b-form-group>
        <b-form-input
          placeholder="글 제목"
          v-model="title"
          style="margin-bottom: 8px"
          required
        ></b-form-input>
        <b-form-textarea
          id="content"
          v-model="content"
          placeholder="글 내용"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: null,
      content: null,
    };
  },
  methods: {
    onSubmit() {
      const userId = JSON.parse(window.localStorage.getItem("token")).id;
      const payload = {
        title: this.title,
        content: this.content,
        userId: userId,
      };
      this.title = null;
      this.content = null;
      this.$store.dispatch("actPostInsert", payload);
    },
  },
};
</script>

<style lang="scss" scoped></style>
