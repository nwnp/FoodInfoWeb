<template>
  <div>
    <b-row v-for="n in 1" :key="n" style="margin-left: 5px; margin-right: 5px">
      <b-col cols="12" xs="12" md="4" v-for="p in PostList" :key="p">
        <b-card
          style="margin-left: 5px; margin-right: 5px"
          header="게시글"
          border-variant="light"
        >
          <div>
            <h5>제목: {{ p.title }}</h5>
            <p>{{ p.nickname }}</p>
          </div>
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
