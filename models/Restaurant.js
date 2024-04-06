// models/Restaurant.js

const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    // Define restaurant schema fields
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
