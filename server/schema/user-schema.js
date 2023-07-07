import mongoose from "mongoose";
// import autoIncrement from 'mongoose-auto-increment';

const userSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phone:String
})

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin,'user');  
//user is collection name in mongodb database

const user= mongoose.model('user',userSchema);  
//user is collection name in mongodb database

export default user;