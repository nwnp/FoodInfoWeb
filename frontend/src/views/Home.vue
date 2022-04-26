<template>
  <div class="home"></div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onClick() {
      console.log("biotine");
    },
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
