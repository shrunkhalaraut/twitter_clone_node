const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    content : {
        type: String,
        required: [ true, 'content is required'],
        maxLength : 250
    },
    created: { type : Date, default : Date.now},
    author: {
        id : {
            type : mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
    },
    likes : {
        type : Number,
        default : 0
    },
    dislikes : {
        type : Number,
        default : 0
    },
})

module.exports = mongoose.model( 'comments', commentSchema);