var express = require('express');
var router = express.Router();
var postController = require('../Controllers/PostController');

/* GET posts listing. */
router.get('/', postController.getPosts);

router.post('/create', postController.addPost);

router.delete('/delete/:id', postController.deletePost);

router.put('/update/:id', postController.updatePost);

router.get('/getPostsByParam', postController.getPostsByParam);

module.exports = router;