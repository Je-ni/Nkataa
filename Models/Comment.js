var mongoose = require('mongoose');

var CommentSchema = mongoose.Schema({
    name: String,
    time: Date,
    commentBody: String
})

module.exports = mongoose.model('Comment', CommentSchema);