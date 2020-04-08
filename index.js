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
let messageHistory = [];


app.get('/', (req, res) => {
    res.send("Schools Out App Server is Running");
})


app.get('/chatHistory', (req, res) => {
    res.send({ 'data': messageHistory });
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
        messageHistory.push(data);
        console.log(messageHistory);
        if (messageHistory.length > 50) {
            messageHistory.removeAt(0);
        }
        userSocket.broadcast.emit("receive_message", data)
    })
})


