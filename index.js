const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

//Import Routes
const authRoute = require('./routes/auth');
const quizRoute = require('./routes/quiz');
const comicsRoute = require('./routes/comics');


dotenv.config();

//Connect to MongoDB
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('Connected to MongoDB')
);

//Middleware
app.use(express.json());

//Route Middleware
app.use('/api/user', authRoute);
app.use('/api/quiz', quizRoute);
app.use('/api/comics', comicsRoute);


app.listen(process.env.PORT, () => console.log('Server Up and running'));