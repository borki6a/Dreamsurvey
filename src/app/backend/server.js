const express = require('express');
const mongo = require ("mongoose");
const { default: mongoose } = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(cors({
    origin:'http://localhost:27017'
}));

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://localhost:27017/users", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;


app.use(express.json({limit:'5mb'}));
app.use(express.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const Schema = mongo.Schema;

const UsersSchema = new Schema ({
    username: { type: String },
    password: { type: String },
    email: { type: String },
}, { versionKey: false});

const model = mongo.model('users', UsersSchema, 'users');

app.post("/api/SaveUse", function(req, res) {
    var mod = new model(req.body);
    if(req.body.mode == "Save") {
        mod.save(function(err, data) {
            if(err) {
                res.send(err);
            }
            else {
                res.send({data:"User is added!"});
            }
        });
    }
    else {
        model.findByIdAndUpdate(req.body.id, {username: req.body.name, password: req.body.password, email: req.body.email},
            function(err, _data) {
                if(err) {
                    res.send(err);
                }
                else {
                    res.send({data:"Data has been updated!"});
                }
            })
    }
})

app.post("/app/deleteUser", function(req, res){
    model.remove({ _id: req.body.id }, function(err) {
        if(err) {
            res.send(err);
        }
        else {
            res.send({ data:"User was removed!" });
        }
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});