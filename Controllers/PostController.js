var model = require('../Models/Post');

exports.addPost = function(req, res){
    var data = {
        postBody: req.body.postBody
    }
    model.create(data, function(err){
        if(err) res.json({err: err, message: 'the post could not be created'});
        res.json({message: 'the post was created successfully'});
    });
}

exports.getPosts = function(req, res){
    model.find(function(err, posts){
        if(err) res.json({err: err, message: 'Something went wrong'});
        res.json(posts);
    });
}

exports.deletePosts = function(req, res){
    var options = {_id: req.params.id};
    model.remove(options, function(err){
        if(err) res.json({err: err, message: 'The post could not be deleted'});
        res.json({message: 'The post was deleted successfully'});
    });
}

exports.updatePost = function(req, res){
    id = req.params.id;

    model.findByIdAndUpdate(id, {
        postBody: req.body.postBody}, function(err){
        if(err) res.json({err: err, message: `The post could not be updated`});
        res.json({message: 'the post was successfully edited'});
    });
}