const express = require('express');
const Rental = require('../controllers/rentalController');

const router = express.Router();

router.get('/rentals', Rental.getRentals);
router.get('/rentals/:id', Rental.getRentalById);
router.post('/rentals/create', Rental.createNewRental);
router.put('/rentals/update/:id', Rental.updateRental);
router.delete('/rentals/delete/:id', Rental.deleteRental);

module.exports = router;