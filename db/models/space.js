var db = require('../config');
var mongoose = require('mongoose');

var spaceSchema = mongoose.Schema({
 id: Number,
 address: String,
 racks: String,
 spots: String,
 coords: {latitude: Number, longitude: Number}
});

var Space = mongoose.model('Space', spaceSchema);




module.exports = Space;
