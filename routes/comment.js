const express = require('express')
const router = express.Router()
const commentcontroller = require('../controllers/comment');
const { isLoggedIn } = require('../middlewares/index')

router.get('/postId/all', isLoggedIn, commentcontroller.getAllComments)

router.post('/postId/add', isLoggedIn, commentcontroller.addcomment)

router.post('/commentId/rating', isLoggedIn, commentcontroller.addRating)

router.get('/:commentId', isLoggedIn, commentcontroller.getComment)


module.exports = router