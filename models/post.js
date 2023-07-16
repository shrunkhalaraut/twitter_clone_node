const mongoose = require("mongoose");
const Schema = mongoose.Schema

const postSchema = new Schema({
    title : String,
    image :String,
    author_id: String,
    comments : [],

})


module.exports = mongoose.model('post', postSchema );