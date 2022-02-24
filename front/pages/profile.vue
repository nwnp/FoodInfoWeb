<template>
  <v-container>
    <v-card>
      <v-container>
        <div class="d-flex flex-column justify-space-between align-center">
          <v-card-title>Profile</v-card-title>
          <v-avatar color="indigo" size="100" style="margin-bottom: 16px">
            <span class="white--text text-h5">{{ user.nickname }}</span>
          </v-avatar>
          <v-card style="margin: 7px; padding: 14px">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field value="jw" label="nickname"></v-text-field>
              </v-col>
              <v-spacer />
              <v-col>
                <v-btn>수정</v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field value="jin@jin.com" label="email"></v-text-field>
              </v-col>
              <v-spacer />
              <v-col>
                <v-btn>수정</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    user: {
      nickname: "jw",
      email: "jin@jin.com",
    },
  }),
};
</script>
