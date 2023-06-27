const express = require('express')
const  router = express.Router()
const postController = require('../controllers/post')


router.get('/all', postController.getAllPosts);

router. get('/add', postController.renderAddForm);

router.post('/add', postController.addPosts);

router.get('/:id', postController.showOnePost)

router.patch('/:id', postController.updatePost)

router.delete('/:id', postController.deletePost)


module.exports = router