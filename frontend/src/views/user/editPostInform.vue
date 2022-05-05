<template>
  <div>
    <b-modal id="modal-edit-inform" size="sm" centered @ok="onSubmit">
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
  computed: {
    postNumber() {
      return this.$store.getters.PostNumber;
    },
  },
  methods: {
    onSubmit() {
      const payload = {
        id: this.postNumber,
        title: this.title,
        content: this.content,
      };
      this.$store.dispatch("actPostEdit", payload);
    },
  },
};
</script>
