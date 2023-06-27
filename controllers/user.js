const userModel = require('../models/user');
const bcrypt = require('bcrypt')
const session = require('express-session')

signupUser = async (req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const newUser = new userModel({
        username,
        password : hash
    })
    await newUser.save();
    req.session.user_id = user_id
    res.send("user signed up successfully!!")
}

async function login(req, res){
    const { password, username } = req.body;
    const user = await userModel.findOne({ username });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(isPasswordValid === true){
        req.session.user_id = user_id;
        res.send("welcome back");
    }
    else{
        res.send("try signup!!")
    }
}

module.exports = {
    signupUser,
    login,
}