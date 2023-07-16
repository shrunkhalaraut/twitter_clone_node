const postModel = require('../models/post');
const userModel = require('../models/user')

async function getAllPosts(req, res) {
    const allPosts = await postModel.find({});
    res.send(allPosts);
}

async function renderAddForm(req, res) {
    res.render('posts/add');
}

async function addPosts( req, res) {
    const body = req.body;
    const userId = req.session.login_id
    const newPost = new postModel({
        title : body.title,
        image: body.image,
        content: body.content,
        author_id: userId,
    });
    await newPost.save();
    const user = await userModel.findById(userId)
    allPostByUser = user.Posts

    allPostByUser.push(newPost._id)
    
    await allPostByUser.findByIdAndUpdate( userId, { post : allPostByUser })
    res.status(201)
    res.send(newPost);
}

async function showOnePost( req, res) {
    const { id } = req.params;
    const pt = await postModel.findById(id);
    res.render('posts/show', {post : pt})
}

async function updatePost(req, res) {
    const { id } = req.params;
    const pt = await postModel.findById(id);
    res.render('posts/add', { post : pt})
}


async function deletePost( req, res){
    const { id } = req.params;
    if(req.session.login_id != null && req.session.login_id === id){
        await postModel.findByIdAndDelete(id);
    }  
    else{
        res.send('you cannot delete!!')
    }
    res.send("hello")
}


module.exports = {
    getAllPosts,
    addPosts,
    renderAddForm,
    showOnePost,
    updatePost,
    deletePost
}