var db = require('../config');
var mongoose = require('mongoose');

var TraitsSchema = mongoose.Schema({
	name: String,
	category: String
});

var trait = mongoose.model('trait', TraitsSchema);

module.exports = trait;