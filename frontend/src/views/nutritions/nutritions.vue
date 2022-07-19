<template>
  <div>
    <div class="conatiner">
      <main>
        <section
          v-for="(n, index) in NutritionList"
          :key="(n, index)"
          v-on:click="nutritionsModal(index)"
        >
          {{ index + 1 }}. 제품명:{{ n.PRDUCT }} 제품회사: {{ n.ENTRPS }}
        </section>
      </main>
      <infinite-loading
        @infinite="infiniteHandler"
        force-use-infinite-wrapper=".el-table__body-wrapper"
      ></infinite-loading>
      <nutritionModal />
    </div>
  </div>
</template>

<script>
import NutritionsModal from "./nutritionsModal.vue";
import InfiniteLoading from "vue-infinite-loading";

export default {
  data() {
    return {};
  },
  components: {
    nutritionModal: NutritionsModal,
    InfiniteLoading,
  },
  computed: {
    NutritionList() {
      return this.$store.getters.NutritionList;
    },
    PageNumber() {
      return this.$store.getters.page;
    },
  },
  created() {
    this.searchNutritionList(1);
  },
  methods: {
    searchNutritionList(payload) {
      this.$store.dispatch("actNutritionList", payload);
    },
    nutritionsModal(index) {
      console.log("index", index);
      this.$bvModal.show("modal-nutritions");
    },

    /* eslint-disable no-unused-vars */
    infiniteHandler($state) {
      const payload = { pageNumber: this.PageNumber + 1, state: $state };
      this.$store.dispatch("actNutritionInfiniteScroll", payload);
    },
  },
};
</script>

<style>
main {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
}

section {
  flex: 1 200px;
  padding: 20px;
  background-color: lightgray;
  margin: 10px;
  border: none;
  border-radius: 7px;
}

.container {
  display: flex;
  justify-content: center;
  align-content: center;
}

@media screen and (max-width: 600px) {
  section {
    flex: 1 100%;
  }
}
</style>
