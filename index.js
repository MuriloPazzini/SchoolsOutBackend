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

app.get('/', (req, res) => {
    res.send("Node Server is running. Yay!!")
})

//Middleware
app.use(express.json());

//Route Middleware
app.use('/api/user', authRoute);
app.use('/api/quiz', quizRoute);
app.use('/api/comics', comicsRoute);

var server = app.listen(process.env.PORT, () => console.log('Server Up and running'));

var io = require('socket.io').listen(server);

io.on("connection", (userSocket) => {
    userSocket.on("send_message", (data) => {
        userSocket.broadcast.emit("receive_message", data)
    })
})


