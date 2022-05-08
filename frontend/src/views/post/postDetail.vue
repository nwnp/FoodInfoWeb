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
      </div>
      <div>
        <b-form-textarea
          style="margin: 5px"
          placeholder="댓글 달기"
          v-model="comment"
        ></b-form-textarea>
        <b-button size="sm" variant="info" @click="onSubmit"
          >댓글 달기</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: null,
    };
  },
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
    InsertedComment() {
      return this.$store.getters.InsertedComment;
    },
  },
  created() {
    this.searchCommentList();
  },
  destroyed() {
    this.removeSession();
  },
  watch: {
    InsertedComment(value) {
      if (value !== null) {
        this.$bvToast.toast("댓글을 등록 했습니다.", {
          title: "SUCCESS",
          variant: "success",
          solid: true,
        });
        this.searchCommentList();
      } else {
        this.$bvToast.toast("댓글 등록을 실패하였습니다.", {
          title: "ERROR",
          variant: "danger",
          solid: true,
        });
      }
    },
  },
  methods: {
    onSubmit() {
      const payload = {
        postId: Number(window.sessionStorage.getItem("number")),
        userId: JSON.parse(window.localStorage.getItem("token"))["id"],
        comment: this.comment,
      };
      this.comment = null;
      this.$store.dispatch("actComment", payload);
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
