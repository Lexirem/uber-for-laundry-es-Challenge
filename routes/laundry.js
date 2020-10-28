const express = require('express');
const router = express.Router();
const withAuth = require('../helpers/middleware');
const User = require('../models/user')


router.get('/dashboard', (req, res, next) => {
    res.render('laundry/dashboard')
});

router.post('/launderers', withAuth, async (req, res, next) => {
    const userId = request.userID;
    let 
})


module.exports = router;