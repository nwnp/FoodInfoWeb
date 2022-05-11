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
        <b-card
          style="
            margin-left: 5px;
            margin-right: 5px;
            margin-bottom: 15px;
            box-shadow: 3px 3px 3px 3px #adadad;
          "
          header="게시글"
        >
          <div
            @click="onClickDetail(index)"
            v-b-popover.hover="'Click me!!'"
            title="댓글 보기"
          >
            <div>
              <h5 style="display: inline-block; margin-right: 4px">
                제목: {{ p.title }}
              </h5>
              <div>
                <p style="display: none">({{ index }})</p>
              </div>
            </div>
            <b-card-text>{{ p.content }}</b-card-text>
          </div>
          <div>
            <p v-if="p.User === null">탈퇴한 회원</p>
            <div v-else>
              <p style="display: inline-block; margin: 4px">
                {{ p.User.nickname }}
              </p>
              <b-badge variant="secondary" @click="onFollow(p.User.id)"
                >팔로우하기</b-badge
              >
            </div>
          </div>
        </b-card>
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
      like: false,
      hate: false,
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
      if (!window.localStorage.getItem("token")) {
        alert("로그인 후 게시글 등록을 할 수 있습니다.");
      } else {
        this.$bvModal.show("modal-post-inform");
      }
    },
    onClickDetail(index) {
      this.$store.dispatch("actPostNumber", this.PostList[index].id);
      this.$store.dispatch("actCommentList", this.PostList[index].id);
      this.$router.push("/posts/detail");
    },
    onFollow(userId) {
      const id = userId;
      const followerId = JSON.parse(window.localStorage.getItem("token")).id;
      const payload = {
        id,
        followerId,
      };
      this.$store.dispatch("actUserFollow", payload);
    },
  },
};
</script>

<style lang="scss" scoped></style>
