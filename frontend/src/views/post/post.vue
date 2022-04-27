<template>
  <div>
    <b-row v-for="n in 1" :key="n" style="margin-left: 5px; margin-right: 5px">
      <b-col cols="12" xs="12" md="4" v-for="p in PostList" :key="p">
        <b-card
          style="margin-left: 5px; margin-right: 5px; margin-bottom: 15px"
          header="게시글"
        >
          <div>
            <h5>제목: {{ p.title }}</h5>
            <p>닉네임: {{ p.User.nickname }}</p>
          </div>
          <!-- <img src="" alt="" /> -->
          <b-card-text>{{ p.content }}</b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <fab :actions="fabActions" @alertMe="alert"></fab>
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
      fabActions: [
        {
          name: "alertMe",
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
  },
  watch: {
    insertedResult(value) {
      console.log("here 1");
      if (value !== null) {
        console.log(value);
        if (value > 0) {
          console.log("test");
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
    alert() {
      this.$bvModal.show("modal-post-inform");
    },
  },
};
</script>

<style lang="scss" scoped></style>
