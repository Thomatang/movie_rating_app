<template>
  <v-layout row wrap>
    <v-flex xs4 v-for="movie in movies" :key="movie._id">
      <v-card height="100%">
        <v-card-title primary-title>
          <div>
            <div class="headline">
              <v-btn flat v-bind:to="`/movies/${movie._id}`">{{
                movie.name
              }}</v-btn>
            </div>
            <div>{{ movie.release_year }}. {{ movie.genre }}.</div>
          </div>
        </v-card-title>
        <v-card-text>{{ movie.description }}</v-card-text>
        <v-card-text>Your rating: NADA</v-card-text>

        <v-card-actions>
          <v-btn flat color="purple" class="button">Rate this movie</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script type="type/javascript">
import axios from 'axios';

export default {
  name: 'Movies',
  data() {
    return {
movies: []
};
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      return axios({
        method: 'get',
        url: 'http://localhost:8081/movies',
      })
      .then((response) => {
        this.movies = response.data.movies;
      })
      .catch(() => {

      });
    },
  },
};
</script>
