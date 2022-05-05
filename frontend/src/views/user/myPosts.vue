<template>
  <div>
    <b-row v-for="n in 1" :key="n" style="margin-left: 5px; margin-right: 5px">
      <b-col
        cols="12"
        xs="12"
        md="4"
        v-for="(p, index) in myPostList"
        :key="(p, index)"
      >
        <b-card
          style="margin-left: 5px; margin-right: 5px; margin-bottom: 15px"
          header="게시글"
        >
          <div>
            <h5 style="display: inline-block; margin-right: 4px">
              제목({{ index }}): {{ p.title }}
            </h5>
          </div>
          <b-card-text>{{ p.content }}</b-card-text>
          <div>
            <b-button
              style="margin: 3px"
              variant="info"
              @click="editPost(index)"
              >수정</b-button
            >
            <b-button
              style="margin: 3px"
              variant="outline-primary"
              @click="removePost(index)"
              >삭제</b-button
            >
          </div>
        </b-card>
      </b-col>
    </b-row>
    <editInform />
  </div>
</template>

<script>
import EditInform from "./editPostInform.vue";

export default {
  components: {
    editInform: EditInform,
  },
  data() {
    return {
      postId: null,
    };
  },
  computed: {
    myPostList() {
      return this.$store.getters.myPostList;
    },
    removedResult() {
      return this.$store.getters.PostRemovedResult;
    },
    updatedResult() {
      return this.$store.getters.PostUpdatedResult;
    },
  },
  created() {
    this.searchMyPostList();
  },
  watch: {
    removedResult(value) {
      if (value !== null) {
        this.$bvToast.toast("게시글이 삭제 되었습니다.", {
          title: "SUCCESS",
          variant: "success",
          solid: true,
        });
        this.searchMyPostList();
      } else {
        this.$bvToast.toast("게시글 삭제를 실패하였습니다.", {
          title: "ERROR",
          variant: "danger",
          solid: true,
        });
      }
    },
    updatedResult(value) {
      if (value !== null) {
        this.$bvToast.toast("게시글 수정이 되었습니다.", {
          title: "SUCCESS",
          variant: "success",
          solid: true,
        });
        this.searchMyPostList();
      } else {
        this.$bvToast.toast("게시글 수정을 실패하였습니다.", {
          title: "ERROR",
          variant: "danger",
          solid: true,
        });
      }
    },
  },
  methods: {
    editPost(index) {
      this.$store.dispatch("actPostNumber", this.myPostList[index].id);
      this.$bvModal.show("modal-edit-inform");
    },
    searchMyPostList() {
      const userId = JSON.parse(window.localStorage.getItem("token"))["id"];
      this.$store.dispatch("authMyPostList", userId);
    },
    removePost(index) {
      const result = confirm("게시글을 삭제 하시겠습니까?");
      if (result) {
        const postId = this.myPostList[index].id;
        console.log(postId);
        this.$store.dispatch("actPostRemove", postId);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
