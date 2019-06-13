/* eslint-disable no-console */
const MovieSchema = require('../models/Movie.js');

module.exports.controller = (app) => {
  app.get('/movies', (req, res) => {
    MovieSchema.find({}, 'name description genre release_year', (error, movies) => {
      if (error) { console.log(error); }
      res.send({
        movies,
      });
    });
  });

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
};
