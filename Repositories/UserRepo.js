var model = require('../Models/User');
var baseRepo = require('../Repositories/BaseRepo');

function userRepo(){
    
}

userRepo.prototype = baseRepo(model);

module.exports = new userRepo();