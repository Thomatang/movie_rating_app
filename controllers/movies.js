/* eslint-disable no-console */
const MovieSchema = require('../models/Movie.js');
const RatingSchema = require('../models/Rating.js');

module.exports.controller = (app) => {
  // fetch a single movie
  app.get('/movies/:id', (req, res) => {
    MovieSchema.findById(req.params.id, 'name description genre release_year', (error, movie) => {
      if (error) { console.log(error); }
      res.send(movie);
    });
  });

  // fetch all movies
  app.get('/movies', (req, res) => {
    MovieSchema.find({}, 'name description genre release_year', (error, movies) => {
      if (error) { console.log(error); }
      res.send({
        movies,
      });
    });
  });

  // add a new movie
  app.post('/movies', (req, res) => {
    const newMovie = new MovieSchema({
      name: req.body.name,
      description: req.body.description,
      release_year: req.body.release_year,
      genre: req.body.genre,
    });

    newMovie.save((error, movie) => {
      if (error) {
        console.log(error);
      }
      res.send(movie);
    });
  });

  // Rate a movie
  app.post('/movies/rate/:id', (req, res) => {
    const rating = new RatingSchema({
      movie_id: req.params.id,
      user_id: req.body.user_id,
      rate: req.body.rate,
    });

    rating.save((error, rating) => {
      if (error) { console.log(error); }
      res.send({
        movie_id: rating.movie_id,
        user_id: rating.user_id,
        rate: rating.rate,
      });
    });
  });
};
