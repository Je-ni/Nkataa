var repo = require('../Repositories/UserRepo');

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