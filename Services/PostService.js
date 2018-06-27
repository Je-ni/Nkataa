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

exports.getPostsByUser = function(req, res, options){
    repo.get(options, '', function(err, users){
        if(err) res.json({err: err, message: 'Something went wrong'});
        res.json(posts);
    });
}

exports.deletePost = function(req, res, options){
    repo.delete(options, function(err){
        if(err) res.json({err: err, message: 'The post could not be deleted'});
        res.json({message: 'The post was deleted successfully'});
    });
}

exports.updatePost = function(req, res, id, options){
    repo.update(id, options, function(err){
        if(err) res.json({err: err, message: `The post could not be updated`});
        res.json({message: update});
    });
}