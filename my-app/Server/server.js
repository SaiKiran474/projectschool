const express = require("express");
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
// const cors = require('cors');
const bcrypt=require("bcrypt")
const app = express();
const dbUrl = 'mongodb://127.0.0.1:27017';
const dbName = 'Blockchain';

app.use(express.json());
app.use(express.urlencoded());
// app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

const MongoSchema = new mongoose.Schema({
  Name: String,
  Role: String,
  ID: [
    { id: Number },
    { parent: Number },
  ],
  Password: String
});
MongoClient.connect(dbUrl, { useUnifiedTopology: true })
  .then(client => {
    const db = client.db(dbName);

    app.listen(4000, function () {
      console.log('Listening on port 4000');
    });
    app.get("/Login",async(req,res)=>{
      let x=req.query.param1;
      let z=req.query.param2;
      const salt=await bcrypt.genSalt();
      y=await bcrypt.hash(z,salt);
      console.log(req.query,y)
      await db.collection('Register').findOne({Id:x})
      .then(result=>{
        bcrypt.compare(req.query.param2, result.Password, function(err, result1) {  // Compare
          // if passwords match
          if (result1) {
               res.json(result)
          }
          // if passwords do not match
          else {
                console.log("Invalid password!");
          }
        });
      })
    })
    app.get("/Details",async(req,res)=>{
      let x=req.query.param1+"";
      console.log(x);
      await db.collection('Register').find({Role:x}).toArray()
      .then(result=>{
        console.log(result[0])
               res.json(result)
        });
      })   
      app.post('/Register', async (req, res) => {
      console.log(req.body);
      const salt=await bcrypt.genSalt();
      req.body.Password=await bcrypt.hash(req.body.Password,salt);
      await db.collection('Register').insertOne(req.body)
        .then(result => {
          console.log(result);
          res.json(result);
        })
        .catch(err => {console.log(err);
          res.json(err);
    });
    });
  })
  .catch(err => {
    console.error('Failed to connect to the database:', err);
  });
  // $2b$10$fr3K5hP78zTD2IE3V71peOyXxmvksXOPv5IrPAw8x5yGtXRFwdAXa
  // $2b$10$NH/KeO3vKqPwlOOnk6GJCO5VoFspRzn8yV9jVMAmJsfU8DT8N3ymy