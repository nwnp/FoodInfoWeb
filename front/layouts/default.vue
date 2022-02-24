<template>
  <div>
    <v-app-bar color="#7291ed" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>FoodInfo Web</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn> -->
      <v-text-field>
        <v-text-field
          label="검색"
          prepend-icon="mdi-magnify"
          :style="{ display: 'flex', alginItems: 'center' }"
        ></v-text-field>
      </v-text-field>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon icon v-bind="attrs" v-on="on">mdi-dots-vertical</v-icon>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>
