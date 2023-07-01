const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    username : {
        type : String,
        required: [ true, "username is required"],
    },
    password : {
        type : String,
        required : [ true, "password is required"],
    },
    posts:[
        {
            id: {
                type : [mongoose.Schema.Types.ObjectId],
                ref: 'post'
            }
        }
    ],
})



module.exports = mongoose.model('user', userSchema)