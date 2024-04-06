const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');

const { initializeMongoDB } = require('./db');
const restaurantRouter = require('./routes/restaurantRouter');
const formRouter = require('./routes/formRouter');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb+srv://mohanakrishnadande2:130165@mohana.baggf3e.mongodb.net/5315-project';

// Initialize MongoDB connection
initializeMongoDB(MONGO_URI);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Handlebars setup
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: '.handlebars',
    layoutsDir: path.join(__dirname, 'views', 'layouts')
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', restaurantRouter);
app.use('/', formRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
