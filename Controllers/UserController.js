var service = require('../Services/UserService');

exports.addUser = function(req, res){
    var data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    return service.addUser(req, res, data);
}

exports.getUsers = function(req, res){
    return service.getAllUsers(req, res);
}

exports.deleteUser = function(req, res){
    
}

exports.getUserByParam = function(req, res){
    var option = req.query;
    return service.getUsersByParam(req, res, option);
}

exports.updateUser = function(req, res){
    
}