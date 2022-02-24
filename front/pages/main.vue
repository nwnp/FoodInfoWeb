<template>
  <v-container class="pa-4 text-center">
    <v-row class="fill-height" align="center" justify="center">
      <template v-for="(item, i) in items">
        <v-col :key="i" cols="12" md="4">
          <v-hover v-slot="{ hover }">
            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
              <v-img :src="item.img" height="225px">
                <v-card-title class="text-h6 white--text">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="mt-4 subheading text-left">
                      {{ item.title }}
                    </p>

                    <div>
                      <p
                        class="ma-0 text-body-1 font-weight-bold font-italic text-left"
                      >
                        {{ item.text }}
                      </p>
                      <p
                        class="text-caption font-weight-medium font-italic text-left"
                      >
                        {{ item.subtext }}
                      </p>
                    </div>
                  </v-row>
                </v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    item: ["health", "nutrition", "board"],
    items: [
      {
        title: "건강기능식품",
        text: `영양제 정보를 알려줍니다!`,
        subtext: "하루에 한 번씩 갱신",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCtBAfrcHxuSNG47du-TEdqz7iMWSNhLubJg&usqp=CAU",
      },
      {
        title: "식품영양성분",
        text: "음식 재료 성분과 영양 정보를 알려줍니다!",
        subtext: "얘도 하루에 한 번씩 갱신!",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUpG8i06FPiTQIi__TXDtRcBmvv1L_vli3mjwtfjzimedBGj6k3DFi8DBqObtbL3ToEc&usqp=CAU",
      },
      {
        title: "자유게시판",
        text: "유저들끼리의 자유로운 대화",
        subtext: "서로 지식을 공유 해주세요!",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDlpE81s4NcpXz3tSQZGDEZj-DfTIgWjYgw&usqp=CAU",
      },
    ],
  }),
};
</script>
<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
