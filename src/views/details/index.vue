<template>
  <div v-if="apiIsLoaded">
    <v-row>
      <v-col cols="12">
        <div class="task-bar px-10">
          <v-row align="center">
            <v-col cols="auto">
              <v-btn
                rounded
                color="#549df2"
                class="white--text"
                elevation
                @click="$router.go(-1)"
              >
                <v-icon left>mdi-arrow-left</v-icon>
                back
              </v-btn>
            </v-col>
            <v-col cols="8" class="pl-9">
              <h2>{{ movie.title }}</h2>
              <p class="text-h6 mb-0">{{ movie.tagline }}</p>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row class="movie-details">
      <v-col cols="4" class="movie-details__image">
        <v-img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="#11b980"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col cols="8" class="movie-details__content">
        <v-row v-for="(value, key) in movieDetails" :key="key">
          <v-col cols="6">
            <h4>{{ key }}</h4>
          </v-col>
          <v-col cols="6">
            <span v-if="key !== 'Homepage Link'">{{ value }}</span>
            <a v-else :href="value">link</a>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="movie-details__overview">
        <p>{{ movie.overview }}</p>
      </v-col>
      <v-col>
        <h3>Credit:</h3>
        <p class="text-body-2">
          <span
            v-for="(credit, index) in sortedCreditsByPopularity.slice(0, 10)"
            :key="index"
          >
            {{ credit.name }} ,
          </span>
          <span v-if="sortedCreditsByPopularity.length > 10">
            and {{ sortedCreditsByPopularity.length - 10 }} more.
          </span>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less" src="./index.less" scoped></style>