import path from 'path';
import mongoose from 'mongoose';
import {db} from '../model/db';

mongoose.connect(db.url);

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    title: String,
    tab1: String,
    tab2: String
});

const questionModel = mongoose.model('questionModel', questionSchema);


const router = require('express').Router();


router.post("/question/data", function(req, res, next) {
  questionModel.create(req.body, function(err, data){
    res.json(data);
  });
});

router.get('/', function(req, res, next) {
  // res.sendFile(path.join(__dirname, '../', 'client', 'index.html'));
  res.sendFile(path.join( __dirname, '../../src/index.html'));
});

export default function UseRoute (app){
    app.use('/', router);
}

