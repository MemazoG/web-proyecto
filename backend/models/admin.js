var mongoose = require("mongoose")
var Schema = mongoose.Schema;
const bcrypt = require("bcrypt");


// # 2
var AdminSchema = Schema ({
    username: String,
    password: String
});


// # 3
module.exports = mongoose.model('admins', AdminSchema);