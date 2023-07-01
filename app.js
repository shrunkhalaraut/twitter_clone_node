const { default: mongoose } = require("mongoose");
const express = require ('express');
const app = express();
const { connectionMongoDB } = require ("./connection")
const User= require ('./models/user');
const postRoutes = require('./routes/post')
const userRoutes = require('./routes/user')
const session = require('express-session')
const path = require('path')
const commentRoutes = require('./routes/comment')

//connection to db
connectionMongoDB();
    
// uses
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(session({ secret : 'my name is shrunkhala'}))

// register routes
app.use('/post', postRoutes)
app.use('/user', userRoutes)
app.use('/comments', commentRoutes)


app.listen(4444, () => {
    console.log("server started on 4444")
})
