var service = require('../Services/UserService');

exports.addUser = function(req, res){
    
}

exports.getUsers = function(req, res){
    return service.getAllUsers(req, res);
}

exports.deleteUser = function(req, res){
    
}

exports.getUserByParam = function(req, res){
    option = req.query;
    return service.getUsersByParam(req, res, option);
}

exports.updateUser = function(req, res){
    
}