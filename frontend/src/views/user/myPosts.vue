<template>
  <div>
    <b-row v-for="n in 1" :key="n" style="margin-left: 5px; margin-right: 5px">
      <b-col cols="12" xs="12" md="4" v-for="p in myPostList" :key="p">
        <b-card
          style="margin-left: 5px; margin-right: 5px; margin-bottom: 15px"
          header="게시글"
        >
          <div>
            <h5 style="display: inline-block; margin-right: 4px">
              제목: {{ p.title }}
            </h5>
          </div>
          <b-card-text>{{ p.content }}</b-card-text>
          <div>
            <b-button style="margin: 3px" variant="info">수정</b-button>
            <b-button style="margin: 3px" variant="outline-primary"
              >삭제</b-button
            >
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  computed: {
    myPostList() {
      return this.$store.getters.myPostList;
    },
  },
  created() {
    this.searchMyPostList();
  },
  methods: {
    searchMyPostList() {
      const userId = JSON.parse(window.localStorage.getItem("token"))["id"];
      this.$store.dispatch("authMyPostList", userId);
    },
  },
};
</script>

<style lang="scss" scoped></style>
