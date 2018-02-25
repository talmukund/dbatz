import path from 'path';
const router = require('express').Router();


router.get('/test', function(req, res, next) {
  // res.sendFile(path.join(__dirname, '../', 'client', 'index.html'));
  res.send("Hello Test");
});

router.get('/', function(req, res, next) {
  // res.sendFile(path.join(__dirname, '../', 'client', 'index.html'));
  res.sendFile(path.join( __dirname, '../../src/index.html'));
});

export default function UseRoute (app){
    app.use('/', router);
}

