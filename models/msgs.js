let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let msge = new Schema({
    msg: String
});

let msg = mongoose.model('msg' , msge);

module.exports={msg};