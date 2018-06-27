var model = require('../Models/Comment');
var baseRepo = require('../Repositories/BaseRepo');

function commentRepo(){

}

commentRepo.prototype = baseRepo(model);

module.exports = new commentRepo();