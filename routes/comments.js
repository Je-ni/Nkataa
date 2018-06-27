var express = require('express');
var router = express.Router();
var commentController = require('../Controllers/CommentController');

/* GET comments listing. */
router.get('/:id', commentController.getPostComments);

router.post('/add', commentController.addComment);

router.delete('/delete/:id', commentController.deleteComment);

router.post('/update/:id', commentController.updateComment);

module.exports = router;