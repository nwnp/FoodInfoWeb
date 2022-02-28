<template>
  <v-form
    ref="form"
    v-model="valid"
    style="position: relative"
    @submit.prevent="onSubmitForm"
  >
    <v-textarea
      v-model="content"
      filled
      label="댓글 달기"
      auto-grow
      :hide-details="hideDetails"
      :success="success"
      :success-messages="successMessages"
      @input="onChangeTextArea"
    />
    <v-btn color="green" dark abosolute top right type="submit">응애~</v-btn>
  </v-form>
</template>

<script>
export default {
  methods: {
    onSubmitForm() {},
    onChangeTextArea() {
      if (value.length) {
        this.hideDetails = true;
        this.success = false;
        this.successMessages = "";
      }
    },
  },
};
</script>
