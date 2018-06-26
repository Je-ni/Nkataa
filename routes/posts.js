var express = require('express');
var router = express.Router();
var postController = require('../Controllers/PostController');

/* GET posts listing. */
router.get('/', postController.getPosts);

router.post('/create', postController.addPost);

router.get('/delete/:id', postController.deletePosts);

router.post('/update/:id', postController.updatePost);

router.get('/getUserPosts/:id', postController.getPostsByUser);

module.exports = router;