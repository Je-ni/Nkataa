var repo = require('../Repositories/UserRepo');

exports.addUser = function(req, res, user){
    repo.add(user, function(err){
        if(err) res.json({err: err, message: 'the user could not be created'});
        res.json({message: 'the user was created successfully'});
    });
}

exports.getAllUsers = function(req, res){
    repo.get({}, '-password', function(err, users){
        if(err) res.json({err: err, message: 'Something went wrong'});
        res.json(users);
    });
}

exports.getUsersByParam = function(req, res, options){
    repo.get(options, '-password', function(err, users){
        if(err) res.json({err: err, message: 'Something went wrong'});
        res.json(users);
    });
}