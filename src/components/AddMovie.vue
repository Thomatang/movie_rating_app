<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field label="Movie Name" v-model="name" :rules="nameRules" required></v-text-field>
    <v-text-field name="input-7-1" label="Movie Description" v-model="description" multiline></v-text-field>

    <v-select label="Movie Release Year" v-model="release_year" :items="years"></v-select>
    <v-text-field label="Movie Genre" v-model="genre"></v-text-field>
    <v-btn @click="submit" :disabled="!valid">Submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    description: "",
    genre: "",
    release_year: "",
    nameRules: [v => !!v || "Movie name is required"],
    select: null,
    years: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        //Perform next action
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>