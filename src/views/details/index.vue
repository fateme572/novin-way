<template>
  <div v-if="apiIsLoaded">
    <v-row>
      <v-col cols="12">
        <div class="task-bar">
          <button>back</button>
          <div>
            <p>{{ movie.title }}</p>
            <p>{{ movie.tagline }}</p>
          </div>
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
        <h6></h6>
      </v-col>
    </v-row>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less" src="./index.less" scoped></style>