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
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    PostList() {
      return this.$store.getters.PostList;
    },
  },
  created() {
    this.searchPostList();
  },
  methods: {
    searchPostList() {
      this.$store.dispatch("actPostList");
    },
  },
};
</script>

<style lang="scss" scoped></style>
