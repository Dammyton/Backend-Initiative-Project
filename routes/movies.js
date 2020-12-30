const express = require('express');
const Movie = require('../controllers/movieController');

const router = express.Router();

router.get('/movies', Movie.getMovies);
router.get('/movies/:id', Movie.getMovieById);
router.post('/movies/create', Movie.createNewMovie);
router.put('/movies/update/:id', Movie.updateMovie);
router.delete('/movies/delete/:id', Movie.deleteMovie);

module.exports = router;