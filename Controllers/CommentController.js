var model = require('../Models/Comment');

exports.addComment = function(req, res){
    var data = {
        post: req.body.post,
        user: req.body.user,
        time: new Date(),
        commentBody: req.body.commentBody
    };
    model.create(data, function(err){
        if(err) res.json({err: err, message: 'the comment could not be added'});
        res.json({message: 'the comment was added successfully'});
    });
}

exports.getCommentsByPost = function(req, res){
    var post = {post: req.param.id};
    model.find(post, function(err, comments){
        if(err) res.json({err: err, message: 'Something went wrong'});
        res.json(comments);
    });
}

exports.deleteComment = function(req, res){
    var options = {_id: req.params.id};
    model.remove(options, function(err){
        if(err) res.json({err: err, message: 'The comment could not be deleted'});
        res.json({message: 'The comment was deleted successfully'});
    });
}

exports.updateComment = function(req, res){
    id = req.params.id;
    update = {
        time: new Date(),
        commentBody: req.body.commentBody,
    };

    model.findByIdAndUpdate(id, update, function(err){
        if(err) res.json({err: err, message: `The comment could not be updated`});
        res.json({message: update});
    });
}