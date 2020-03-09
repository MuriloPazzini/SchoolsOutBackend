const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
const verify = require('../routes/verifyToken');
const Comics = require('../models/comics');

const { registerValidation, loginValidation } = require('../validator');

router.post('/insert', async (req, res) => {
    try {
        const comics = new Comics({
            name: req.body.name,
            edition: req.body.edition,
            pages: req.body.pages,
            type: req.body.type
        });

        const savedComics = await comics.save();
        res.send(savedComics);

    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/all', async (req, res) => {
    try {
        Comics.find(function (err, comics) {
            if (err)
                res.status(400).send(err);

            res.send(comics);
        })
    } catch (err) {

    }
})

module.exports = router;