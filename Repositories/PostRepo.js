var model = require('../Models/Post');
var baseRepo = require('../Repositories/BaseRepo');

function postRepo(){

}

postRepo.prototype = baseRepo(model);

module.exports = new postRepo();