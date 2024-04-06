// routes/restaurantRouter.js

const express = require('express');
const router = express.Router();
const {
    addNewRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurantById,
    deleteRestaurantById
} = require('../controllers/restaurantController');

// Routes
router.post('/api/restaurants', addNewRestaurant);
router.get('/api/restaurants', getAllRestaurants);
router.get('/api/restaurants/:id', getRestaurantById);
router.put('/api/restaurants/:id', updateRestaurantById);
router.delete('/api/restaurants/:id', deleteRestaurantById);

module.exports = router;
