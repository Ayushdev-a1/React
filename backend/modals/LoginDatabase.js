const mongoose = require('mongoose')
const { Schema } = mongoose;
const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    Number: {
        type: Number,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    confirmpassword: {
        type: String,
        require: true
    }
});
const User = new mongoose.model("user", UserSchema);
module.exports = User