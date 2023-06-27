const mongoose = require("mongoose");
const Schema = mongoose.Schema

const postSchema = new Schema({
    title : String,
    image :String,
    content : String,
})


module.exports = mongoose.model('post', postSchema );