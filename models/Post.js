// const mongoos = require('mongoos');
// const { Schema,model } = require('mongoose');

// const PostSchema= ne Schema({
//     title:String,
//     summary:String,
//     content:String,
//     cover:String,
// },{
//     timestamps:true,
// }) ;

// const PostModel=model('Post',PostSchema);
// module.exports=PostModel

const mongoose = require('mongoose');
// const { Schema, model } = mongoose;
const { model } = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    title: String,
    summary: String,
    content: String,
    cover: String,
    author:{type:Schema.Types.ObjectId,ref:'User'}
}, {
    timestamps: true,
});

const PostModel = model('Post', PostSchema);
module.exports = PostModel;
