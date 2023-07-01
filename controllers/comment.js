const postModel = require('../models/post');
const userModel = require('../models/user');
const commentModel = require('../models/comment')

async function getAllComments(req, res) {
    const { postId } = req.params
    const post = await postModel.findById(postId);
    const allCommentIds = post.comments;
    const allComments = await commentModel.find({ _id : { $in : allComments}})
    return allComments;
    // res.send(allComments);
}

async function addcomment(req, res) {
    const { postId } = req.params
    const { content } = req.body
    const userId = req.session.login_id

    const newComment = new commentModel({
        content,
        author : {
            id : userId,
            username : 'default',
        },
    })

    await newComment.save();
    const post = await postModel.findById(postId);
    let comments = post.comments;
    comment.push(newComment._id);
    await postModel.findByIdAndUpdate(postId, { comments});
    res.send(post)

}

async function getComment(req, res) {
    const { commentId } = req.params
    let comment = await commentModel.findById(commentId);
    res.send(comment);
}

async function addRating(req, res) {
    const { commentId } = req.params
    const like = req.body.like;
    let comment = await commentModel.findById(commentId)
    let totalLikes = comment.likes;
    let totalDislikes = comment.dislikes

    if(like === 'true'){
        totalLikes++
    }
    else{
        totalDislikes++
    }
    await commentModel.findByIdAndUpdate(comment, { likes : totalLikes}, { dislikes : totalDislikes})
    comment.likes = totalLikes;
    comment.dislikes = totalDislikes;
    res.send(comment)
}

module.exports = {
    getAllComments,
    addcomment,
    addRating,
    getComment
}