var model = require('../Models/User');

exports.addUser = function(req, res){
    var data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    model.create(data, function(err){
        if(err) res.json({err: err, message: 'the user could not be created'});
        res.json({message: 'the user was created successfully'});
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