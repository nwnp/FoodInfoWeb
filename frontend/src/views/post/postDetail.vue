<template>
  <div>
    <div>
      <div style="margin: 5px">
        <h3>제목 : {{ PostTitle }}</h3>
        <div>
          <h5>
            {{ PostContent }}
          </h5>
        </div>
        <b-card>
          <div v-for="p in CommentList" :key="p">
            <p style="display: inline-block">
              {{ p.User.nickname }}님의 댓글 ➡️
            </p>
            <p style="display: inline-block">{{ p.comment }}</p>
          </div>
        </b-card>
        <b-card>
          <!-- <b-rows v-for="c in CommentList"></b-rows> -->
        </b-card>
      </div>
      <div>
        <b-form-textarea style="margin: 5px"></b-form-textarea>
        <b-button size="sm" variant="info" @click="onSubmit"
          >댓글 달기</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    PostNumber() {
      return this.$store.getters.PostNumber;
    },
    CommentList() {
      return this.$store.getters.CommentList;
    },
    PostTitle() {
      return this.$store.getters.PostTitle;
    },
    PostContent() {
      return this.$store.getters.PostContent;
    },
  },
  created() {
    this.searchCommentList();
  },
  destroyed() {
    this.removeSession();
  },
  methods: {
    onSubmit() {
      console.log("post detail");
    },
    searchCommentList() {
      this.$store.dispatch(
        "actCommentList",
        window.sessionStorage.getItem("number")
      );
      this.$store.dispatch("actTitle", window.sessionStorage.getItem("number"));
    },
    removeSession() {
      window.sessionStorage.clear();
    },
  },
};
</script>

<style lang="scss" scoped></style>
