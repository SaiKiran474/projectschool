const express=require("express");
const app=express();
const Mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient
const bodyParser=require('body-parser')
const ejs=require("ejs")
app.use(express.json())
app.use(express.urlencoded())
const { ObjectID, ObjectId, BSONType, MongoDBNamespace } = require("mongodb")
MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
  .then(client => {
    app.listen(2100,function(){
        console.log('listening on 3000')
    })
    app.get('/',(req,res)=>{res.sendFile(__dirname+'/login.html')})
})
