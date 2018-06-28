var repo = require('../Repositories/PostRepo');
var userRepo = require('../Repositories/UserRepo');

exports.addPost = function(req, res, data){
    repo.add(data, function(err, post){
        userRepo.getById(data.user, function(err, user){
            user.posts.push(post._id);
            user.save();
            if(err) res.json({err: err, message: 'the post could not be created'});
            res.json({message: 'the post was created successfully'});
        })
    });
}

exports.getAllPosts = function(req, res){
    repo.get({}, '', {path: 'user', select: 'name'}, 'comments', function(err, posts){
        if(err) res.json({err: err, message: 'Something went wrong'});
        res.json(posts);
    });
}

exports.getPostsByParam = function(req, res, options){
    repo.get(options, '', {path: 'user', select: 'name'}, 'comments', function(err, posts){
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