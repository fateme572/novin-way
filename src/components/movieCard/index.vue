<template>
  <div class="movie-card">
    <div class="movie-card__content">
      <h3>{{ title }}</h3>
      <h5 class="movie-card__content__details">
        <v-icon color="black" dense>mdi-calendar-blank</v-icon>
        {{ releaseDate }}
      </h5>
    </div>
    <div class="movie-card__image">
      <v-img :src="src">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="#11b980"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" src="./index.less" scoped></style>