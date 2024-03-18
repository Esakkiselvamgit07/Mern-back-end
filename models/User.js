const mongoose = require('mongoose');
const { model } = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: { type: String, required: true, minlength: 4, unique: true },
    password: { type: String, required: true }
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
// https://github.com/dejwid/mern-blog


// const mongoose = require('mongoose');
// const { model } = require('mongoose');
// const {Schema} = mongoose;

// const UserSchema = new Schema({
//     username:{type:String, required:true, min:4, unique:true},
//     password:{type:String, required:true}
// });

// const UserModel=model('User',UserSchema);

// module.exports=UserModel
// app.post("/login", async (req, res) => {
//     const {username,password}=req.body;
//      const userDoc = await User.findOne({username});
//      res.json(userDoc)  
    
//   });