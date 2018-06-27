var service = require('../Services/PostService');

exports.addPost = function(req, res){
    var data = {
        user: req.body.user,
        time: Date.now(),
        postBody: req.body.postBody
    };
    return service.addPost(req, res, data);
}

exports.getPosts = function(req, res){
    return service.getAllPosts(req, res);
}

exports.deletePost = function(req, res){
    var option = {_id: req.params.id};
    return service.deletePost(req, res, option);
}

exports.getPostsByParam = function(req, res){
    var option = req.query;
    return service.getPostsByParam(req, res, option);
}

exports.updatePost = function(req, res){
    id = req.params.id;
    update = {postBody: req.body.postBody};
    return service.updatePost(req, res, id, update);    
}