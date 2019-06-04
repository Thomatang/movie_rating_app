<template>
  <v-layout row wrap>
    <v-flex xs-12>{{message}}</v-flex>
    <v-flex xs-12>
      <v-btn class="p-4 button" v-on:click="reply">BTN</v-btn>
    </v-flex>
    <v-flex xs-4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">Batman vs Superman</div>
            <div>2016. Science fiction film/Action. 3h 3m</div>
          </div>
        </v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</v-card-text>
        <v-card-actions>
          <v-btn flat color="purple" class="button">Rate this movie</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script type='text/javascript'>
export default {
  data() {
    return {
      message: 'User Space',
    };
  },
  methods: {
    reply() {
      this.message = 'Welcome';
    },
  },
};
</script>

