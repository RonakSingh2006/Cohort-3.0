const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;


mongoose.connect("mongodb+srv://ronaksingh201106_db_user:ucGIxAiYUoyvl4iT@cluster0.8cbmfgr.mongodb.net/todo-app-database")

const User = new Schema({
  email : String,
  name : String,
  password : String
})


const Todo = new Schema({
  userId : ObjectId,
  title : String,
  done : Boolean
})


const UserModel = mongoose.model('users',User);

const TodoModel = mongoose.model('todos',Todo);

module.exports = {UserModel,TodoModel};