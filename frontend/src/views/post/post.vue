<template>
  <div>
    <b-row v-for="n in 1" :key="n" style="margin-left: 5px; margin-right: 5px">
      <b-col
        cols="12"
        xs="12"
        md="4"
        v-for="(p, index) in PostList"
        :key="(p, index)"
      >
        <div
          @click="onClickDetail(index)"
          v-b-popover.hover="'Click me!!'"
          title="댓글 보기"
        >
          <b-card
            style="
              margin-left: 5px;
              margin-right: 5px;
              margin-bottom: 15px;
              box-shadow: 3px 3px 3px 3px #adadad;
            "
            header="게시글"
          >
            <div>
              <h5 style="display: inline-block; margin-right: 4px">
                제목: {{ p.title }}
              </h5>
              <div>
                <p v-if="p.User === null">탈퇴한 회원</p>
                <p v-else>닉네임: {{ p.User.nickname }}</p>
                <p style="display: none">({{ index }})</p>
              </div>
            </div>
            <!-- <img src="" alt="" /> -->
            <b-card-text>{{ p.content }}</b-card-text>
          </b-card>
        </div>
      </b-col>
    </b-row>

    <fab :actions="fabActions" @addPost="addPost"></fab>
    <!-- <detail-inform /> -->
    <post-inform />
  </div>
</template>

<script>
import fab from "vue-fab";
import PostInform from "./postInform.vue";

export default {
  components: {
    fab,
    postInform: PostInform,
  },
  data() {
    return {
      bgColor: "#778899",
      position: "top-right",
      isHovered: false,
      fabActions: [
        {
          name: "addPost",
          icon: "등록",
        },
      ],
    };
  },
  computed: {
    PostList() {
      return this.$store.getters.PostList;
    },
    insertedResult() {
      return this.$store.getters.PostInsertedResult;
    },
    PostNumber() {
      return this.$store.getters.PostNumber;
    },
  },
  watch: {
    insertedResult(value) {
      if (value !== null) {
        this.$bvToast.toast("게시글이 등록 되었습니다.", {
          title: "SUCCESS",
          variant: "success",
          solid: true,
        });
        this.searchPostList();
      } else {
        this.$bvToast.toast("게시글 등록을 실패하였습니다.", {
          title: "ERROR",
          variant: "danger",
          solid: true,
        });
      }
    },
  },
  created() {
    this.searchPostList();
  },
  methods: {
    searchPostList() {
      this.$store.dispatch("actPostList");
    },
    addPost() {
      this.$bvModal.show("modal-post-inform");
    },
    onClickDetail(index) {
      this.$store.dispatch("actPostNumber", this.PostList[index].id);
      this.$store.dispatch("actCommentList", this.PostList[index].id);
      this.$router.push("/posts/detail");
    },
  },
};
</script>

<style lang="scss" scoped></style>
