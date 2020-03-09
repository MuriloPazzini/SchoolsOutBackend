const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
const verify = require('../routes/verifyToken');
const Quiz = require('../models/quiz');

const { registerValidation, loginValidation } = require('../validator');

router.post('/insert', async (req, res) => {
    try {
        const quiz = new Quiz({
            name: req.body.name,
            questions: req.body.questions
        });

        const savedQuiz = await quiz.save();
        res.send(savedQuiz);

    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/all', async (req, res) => {
    try {
        Quiz.find(function (err, quizzes) {
            if (err)
                res.status(400).send(err);

            res.send(quizzes);
        })
    } catch (err) {

    }
})

module.exports = router;