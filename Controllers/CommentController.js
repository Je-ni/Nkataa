var model = require('../Models/Comment');

exports.addComment = function(req, res){
    var data = {
        post: req.body.postId,
        user: req.body.userId,
        time: new Date(),
        commentBody: req.body.commentBody
    };
    model.create(data, function(err){
        if(err) res.json({err: err, message: 'the comment could not be added'});
        res.json({message: 'the comment was added successfully'});
    });
}

exports.getUsers = function(req, res){
    model.find(function(err, users){
        if(err) res.json({err: err, message: 'Something went wrong'});
        res.json(users);
    });
}

exports.deleteUser = function(req, res){
    var options = {_id: req.params.id};
    model.remove(options, function(err){
        if(err) res.json({err: err, message: 'The user could not be deleted'});
        res.json({message: 'The user was deleted successfully'});
    });
}

exports.getUserByParam = function(req, res){
    var key = req.params.key;
    var value = req.params.value;
    switch (key){
        case 'id':
        model.findById(value, '-password', function(err, data){
            if(err) res.json({err: err, message: `The user with id:${value} could not be found`});
            res.json({message: data});
        });
        break;

        case 'name':
        model.find({name: value}, '-password', function(err, data){
            if(err) res.json({err: err, message: `The user with name: ${value} could not be found`});
            res.json({message: data});
        });
        break;

        case 'email':
        model.findOne({email: value}, '-password', function(err, data){
            if(err) res.json({err: err, message: `The email: ${value} could not be found`});
            res.json({message: data});
        });
        break;

        default:
        res.json({message: 'Resource could not be found'});
    }
}

exports.updateUser = function(req, res){
    id = req.params.id;
    update = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

    model.findByIdAndUpdate(id, update, function(err){
        if(err) res.json({err: err, message: `The user could not be updated`});
        res.json({message: update});
    });
}