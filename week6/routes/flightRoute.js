const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.Flight);
router.post('/flight', controller.addFlights);
router.get('/:id', controller.getFlight);
router.put('/:id', controller.updateFlight);
router.delete('/:id', controller.deleteFlight);


module.exports = router;

