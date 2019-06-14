<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">
              {{ movie.name }}
            </div>
            <span class="grey--text"
              >{{ movie.release_year }} . {{ movie.genre }}.</span
            >
          </div>
        </v-card-title>
        <h6 class="card-title" @click="rate">
          Rate this movie
        </h6>
        <v-btn flat color="purple" class="button" @click="rate"
          >Rate this movie</v-btn
        >

        <v-card-text>
          {{ movie.description }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from 'axios';
import Vue from 'vue';
import StarRating from 'vue-star-rating';

const wrapper = document.createElement('div');
//shared state
const state = {
  note: 0
};

const RatingComponent = Vue.extend({
  data() {
    return { rating: 0 };
  },
  watch: {
    rating(newVal) {
      state.note = newVal;
    }
  },
  template: `
    <div class="rating">
    How many stars would award this movie?
    <star-rating v-model="rating" :show-rating="false"></star-rating>
    </div>
    `,
  components: { 'star-rating': StarRating }
});

const component = new RatingComponent().$mount(wrapper);

export default {
  name: 'Movie',
  data() {
    return {
      movie: []
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    async rate() {
      this.$swal({
        content: component.$el,
        buttons: {
          confirm: {
            value: 0
          }
        }
      }).then(() => {
        const movieId = this.$route.params.id;
        return axios({
          method: 'post',
          data: {
            user_id: 'jeanclaude',
            rate: state.note
          },
          url: `http://localhost:8081/movies/rate/${movieId}`,
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(() => {
            this.$swal(`Thank you for rating! ${state.note}`, 'success');
          })
          .catch(error => {
            const message = error.response.data.message;
            this.$swal('Oh oo!', `${message}`, 'error');
          });
      });
    },
    async fetchMovies() {
      return axios({
        method: 'get',
        url: `http://localhost:8081/movies/${this.$route.params.id}`
      })
        .then(response => {
          this.movie = response.data;
        })
        .catch(() => {});
    }
  }
};
</script>
