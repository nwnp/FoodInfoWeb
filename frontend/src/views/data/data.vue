<template>
  <div>
    <h1>Nutrition</h1>
    <div v-for="(n, index) in NutritionList" :key="(n, index)">
      <h3>{{ index + 1 }}.{{ n.PRDUCT }}</h3>
      <div>{{ n.BASE_STANDARD }}</div>
      <div>{{ n.DISTB_PD }}</div>
      <div>{{ n.ENTRPS }}</div>
      <div>{{ n.INTAKE_HINT1 }}</div>
      <div>{{ n.MAIN_FNCTN }}</div>
      <div>{{ n.PRDUCT }}</div>
      <div>{{ n.PRSRV_PD }}</div>
      <div>{{ n.REGIST_DT }}</div>
      <div>{{ n.SRV_USE }}</div>
      <div>{{ n.STTEMNT_NO }}</div>
      <div>{{ n.SUNGSANG }}</div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
  },
};
</script>
