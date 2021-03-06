var express = require('express');
var router = express.Router();
var commentController = require('../Controllers/CommentController');

/* GET comments listing. */
router.get('/', commentController.getComments);

router.get('/:id', commentController.getPostComments);

router.post('/add', commentController.addComment);

router.delete('/delete/:id', commentController.deleteComment);

router.put('/update/:id', commentController.updateComment);

module.exports = router;