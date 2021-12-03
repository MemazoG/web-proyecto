var mongoose = require("mongoose")
var Schema = mongoose.Schema;
const bcrypt = require("bcrypt");


// # 2
var AdminSchema = Schema ({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});


// # 3
module.exports = mongoose.model('admins', AdminSchema);