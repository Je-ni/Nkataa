var service = require('../Services/CommentService');

exports.addComment = function(req, res){
    var data = {
        post: req.body.post,
        user: req.body.user,
        time: Date.now(),
        commentBody: req.body.commentBody
    };
    return service.addComment(req, res, data);
}

exports.getPostComments = function(req, res){
    post = {_id: req.param.id};
    return service.getCommentsInPost(req, res, post);
}

exports.deleteComment = function(req, res){
    var option = {_id: req.params.id};
    return service.deleteComment(req, res, option);
}

exports.updateComment = function(req, res){
    id = req.params.id;
    update = {
        time: Date.now(),
        commentBody: req.body.commentBody
    };
    return service.updateComment(req, res, id, update);    
}