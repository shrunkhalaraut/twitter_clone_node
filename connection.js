

const mongoose = require("mongoose");
const url= "mongodb+srv://shrunkhalaraut:D9QoQLb9zGiVi7sJ@cluster0.dwabuzw.mongodb.net/blogdb"

async function connectionMongoDB(){
    return mongoose.connect(url).then(() => {
        console.log("connected to mongodb");
    })
}
module.exports = {
    connectionMongoDB,
}