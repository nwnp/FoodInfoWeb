<template>
  <div class="container">
    <b-modal
      ref="my-modal"
      id="modal-nutritions"
      size="m"
      centered
      hide-footer
      title="FOODINFOWEB"
    >
      <div>
        <h5>
          {{ NutritionList[SelectedItem].ENTRPS }}
        </h5>
      </div>
      <div class="description">
        {{ NutritionList[SelectedItem].BASE_STANDARD }}
      </div>
      <div class="contents">
        {{ NutritionList[SelectedItem].MAIN_FNCTN }}
      </div>
      <div>
        <b> [제조일 및 유통기한] </b>
        {{ NutritionList[SelectedItem].REGIST_DT }} /
        {{ NutritionList[SelectedItem].DISTB_PD }}
      </div>
      <div><b> [보관방법] </b>{{ NutritionList[SelectedItem].PRSRV_PD }}</div>
      <b-button class="mt-3" variant="outline-info" block @click="hideModal"
        >Close</b-button
      >
    </b-modal>
  </div>
</template>

<script>
export default {
  computed: {
    NutritionList() {
      return this.$store.getters.NutritionList;
    },
    SelectedItem() {
      return this.$store.getters.SelectedItem;
    },
  },
  methods: {
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contents {
  display: flex;
  justify-content: center;
  background-color: lightgray;
  border-radius: 7px;
  padding: 5px;
  margin: 5px;
}

.description {
  display: flex;
  justify-content: center;
  background-color: #d2edf7;
  border-radius: 7px;
  padding: 5px;
  margin: 5px;
}
</style>
