const { default: mongoose } = require("mongoose");
const express = require ('express');
const app = express();
const { connectionMongoDb } = require ("./connection")
const User= require ('./models');
const postRoutes = require('./routes/post')
const userRoutes = require('./routes/user')
const session = require('express-session')

//connection to db
connectionMongoDb();
    
// uses
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(session({ secret : 'my name is shrunkhala'}))

// register routes
app.use('/post', postRoutes)
app.use('/user', userRoutes)


app.listen(4444, () => {
    console.log("server started on 4444")
})
