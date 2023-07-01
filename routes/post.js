const express = require('express')
const  router = express.Router()
const { isLoggedIn } = require('../middlewares/index')
const postController = require('../controllers/post')


router.get('/all', isLoggedIn, postController.getAllPosts);

router. get('/add',isLoggedIn, postController.renderAddForm);

router.post('/add',isLoggedIn, postController.addPosts);

router.get('/:id', isLoggedIn, postController.showOnePost)

router.patch('/:id', postController.updatePost)

router.delete('/:id', postController.deletePost)


module.exports = router