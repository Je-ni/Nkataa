var repo = require('../Repositories/PostRepo');

exports.addPost = function(req, res, post){
    repo.add(post, function(err){
        if(err) res.json({err: err, message: 'the post could not be created'});
        res.json({message: 'the post was created successfully'});
    });
}

exports.getAllPosts = function(req, res){
    repo.get({}, '', function(err, posts){
        if(err) res.json({err: err, message: 'Something went wrong'});
        res.json(posts);
    });
}

exports.getUsersByParam = function(req, res, options){
    repo.get(options, '-password', function(err, users){
        if(err) res.json({err: err, message: 'Something went wrong'});
        res.json(users);
    });
}

exports.deleteUser = function(req, res, options){
    repo.delete(options, function(err){
        if(err) res.json({err: err, message: 'The user could not be deleted'});
        res.json({message: 'The user was deleted successfully'});
    });
}

exports.updateUser = function(req, res, id, options){
    repo.update(id, options, function(err){
        if(err) res.json({err: err, message: `The user could not be updated`});
        res.json({message: update});
    });
}