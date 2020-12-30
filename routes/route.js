const express = require('express');

const router = express.Router();


//Users Route
const user = require('./users')
router.use(user);

// Rentals Route
const rental = require('./rentals')
router.use(rental);

// Movies Route
const movie = require('./movies')
router.use(movie);

module.exports = router;
