
const mongoose = require('mongoose');


//declare model and controller
const Person = mongoose.model('Person');
let people = require('../controllers/people.js');

module.exports = function(app){

  // render -> client/views/index.ejs
  app.get('/', function(req, res){
    res.send('index');
  })




}
