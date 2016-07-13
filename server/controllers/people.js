// this is sample controller

const mongoose = require('mongoose');
const Person = mongoose.model('Person');


module.exports = {
  show: function(req, res){
    Person.find({}).
      sort({created_at: -1}).
      exec( function(err,persons){
      res.render('main', {persons: persons})
    });
  },


  create: function(req, res){
    let person = new Person({
      name: req.body.name,
      person: req.body.person
    });
    person.save(function(err){
      if(err){
        console.log('something went wrong');
      } else{
        res.redirect('/main');
      }
    });
  },
}
