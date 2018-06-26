var express = require('express');
var router = express.Router();
var commentController = require('../Controllers/CommentController');

/* GET comments listing. */
router.get('/', commentController.getComments);

router.post('/create', commentController.addComment);

router.get('/delete/:id', commentController.deleteComment);

router.post('/update/:id', commentController.updateComment);

router.get('/getUserComments/:id', commentController.getCommentssByUser);

module.exports = router;