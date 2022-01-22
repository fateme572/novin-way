<template>
  <div v-if="apiIsLoaded" class="home-page">
    <v-row>
      <v-col cols="12">
        <div class="task-bar">
          <v-row no-gutters align="center">
            <v-col cols="9">
              <date-picker :range-date.sync="rangeReleaseDate"></date-picker>
            </v-col>
            <v-col cols="3">
              <button class="btn--search" @click="filterByReleaseDate()">
                search
              </button>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row class="movie-cards">
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(movie, index) in movies"
        :key="index"
      >
        <router-link :to="{ name: 'movie-details', params: { id: movie.id } }">
          <movie-card
            :title="movie.title"
            :release-date="movie.release_date"
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
          ></movie-card>
        </router-link>
      </v-col>
    </v-row>
    <v-row class="pagination" justify="center">
      <v-col cols="auto">
        <button @click="previosPage()" :disabled="page <= 1">
          Previos Page
        </button>
      </v-col>
      <v-col cols="auto">
        <button @click="nextPage()" :disabled="page == totalPages">
          Next Page
        </button>
      </v-col>
    </v-row>
    <v-row class="indexes">
      <v-col cols="12" class="text-center">
        <span>
          Showing results {{ page * perPage - (perPage - 1) }} -
          {{ page * perPage }}
        </span>
      </v-col>
    </v-row>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less" src="./index.less" scoped></style>