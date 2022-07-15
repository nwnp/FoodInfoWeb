<template>
  <div>
    <b-list-group>
      <b-list-group-item
        style="margin-left: 5px; margin-right: 5px; margin-bottom: 8px"
        v-for="(n, index) in NutritionList"
        :key="(n, index)"
        v-on:click="nutritionsModal(index)"
      >
        {{ index + 1 }}. 제품명:{{ n.PRDUCT }} 제품회사: {{ n.ENTRPS }}
      </b-list-group-item>
    </b-list-group>
    <nutritionModal />
  </div>
</template>

<script>
import NutritionsModal from "./nutritionsModal.vue";

export default {
  data() {
    return {};
  },
  components: {
    nutritionModal: NutritionsModal,
  },
  computed: {
    NutritionList() {
      return this.$store.getters.NutritionList;
    },
  },
  created() {
    this.searchNutritionList();
  },
  methods: {
    searchNutritionList() {
      this.$store.dispatch("actNutritionList");
    },
    nutritionsModal(index) {
      console.log("index", index);
      this.$bvModal.show("modal-nutritions");
    },
  },
};
</script>
