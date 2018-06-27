var repo = require('../Repositories/CommentRepo');

exports.addComment = function(req, res, comment){
    repo.add(comment, function(err){
        if(err) res.json({err: err, message: 'the comment could not be created'});
        res.json({message: 'the comment was created successfully'});
    });
}

exports.getCommentsInPost = function(req, res, options){
    repo.get(options, '', function(err, posts){
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