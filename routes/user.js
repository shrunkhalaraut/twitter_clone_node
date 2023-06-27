const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

router.post('signup', userController.signupUser)

router.post('/login', userController.login)

router.get('/check', async(req, res) => {
    if(req.session.user_id != null) {
        res.send("user is logged in")
    } 
    else{
        res.send("no one is loggendIn")
    }
})

module.exports = router



