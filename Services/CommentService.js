var repo = require('../Repositories/CommentRepo');
var postRepo = require('../Repositories/PostRepo');

exports.addComment = function(req, res, data){
    repo.add(data, function(err, comment){
        postRepo.getById(data.post, function(err, post){
            post.comments.push(comment._id);
            post.save();
            if(err) res.json({err: err, message: 'the comment could not be created'});
            res.json({message: 'the comment was created successfully'});
        })
    });
}

exports.getAllComments = function(req, res){
    repo.get({}, '',{path: 'user', select: 'name'}, {path: 'post', select:'-comments'}, function(err, comments){
        if(err) res.json({err: err, message: 'Something went wrong'});
        res.json(comments);
    });
}

exports.getCommentsInPost = function(req, res, options){
    repo.get(options, '', {path: 'user', select: 'name'}, 'post',function(err, posts){
        if(err) res.json({err: err, message: 'Something went wrong'});
        res.json(posts);
    });
}

exports.deleteComment = function(req, res, options){
    repo.delete(options, function(err){
        if(err) res.json({err: err, message: 'The comment could not be deleted'});
        res.json({message: 'The comment was deleted successfully'});
    });
}

exports.updateComment = function(req, res, id, options){
    repo.update(id, options, function(err){
        if(err) res.json({err: err, message: `The Comment could not be updated`});
        res.json({message: update});
    });
}