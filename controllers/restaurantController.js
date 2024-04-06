const Restaurant = require('../models/Restaurant');

// Add new restaurant
const addNewRestaurant = async (req, res) => {
    try {
        const newRestaurant = await Restaurant.create(req.body);
        res.status(201).json(newRestaurant);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add new restaurant' });
    }
};

// Get all restaurants
const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve restaurants' });
    }
};

// Get restaurant by ID
const getRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve restaurant' });
    }
};

// Update restaurant by ID
const updateRestaurantById = async (req, res) => {
    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRestaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.status(200).json(updatedRestaurant);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update restaurant' });
    }
};

// Delete restaurant by ID
const deleteRestaurantById = async (req, res) => {
    try {
        const deletedRestaurant = await Restaurant.findByIdAndDelete(req.params.id);
        if (!deletedRestaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.status(200).json({ message: 'Restaurant deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete restaurant' });
    }
};

module.exports = {
    addNewRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurantById,
    deleteRestaurantById
};
