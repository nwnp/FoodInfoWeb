<template>
  <v-container>
    <v-card v-for="post in dummyPosts" :key="post">
      <v-card-title>{{ post.title }}</v-card-title>
      <v-card-text>
        <p>{{ post.nickname }}님</p>
        {{ post.comment }}
      </v-card-text>
      <v-col cols="12" sm="3">
        <v-card-actions>
          <v-btn class="ma-2" text icon>
            <v-icon color="blue darken-2" @click="onToggleComment"
              >mdi-message-text</v-icon
            >
          </v-btn>
          <v-btn class="ma-2" text icon color="blue lighten-2">
            <v-icon>mdi-thumb-up</v-icon>
          </v-btn>
          <v-btn class="ma-2" text icon color="red lighten-2">
            <v-icon>mdi-thumb-down</v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-card>
    <template v-if="commentOpened">
      <comment-form />
    </template>
  </v-container>
</template>

<script>
import CommentForm from "../../components/CommentForm.vue";

export default {
  components: {
    CommentForm,
  },
  data() {
    return {
      dummyPosts: {
        1: {
          id: 1,
          title: "게시글 타이틀",
          comment: "게시글 내용",
          nickname: "pa12",
        },
      },
      valid: true,
      commentOpened: false,
    };
  },
  methods: {
    onToggleComment() {
      this.commentOpened = !this.commentOpened;
    },
  },
};
</script>
