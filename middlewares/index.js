const isLoggedIn = (req, res, next) => {
    if(!req.session.login_id){
        res.status(401)
        res.send ("please login first");
    }
    else{
        console.log("I m here");
        next();
    }
}

module.exports = {
    isLoggedIn,
}