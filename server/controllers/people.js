// this is sample controller

const mongoose = require('mongoose');
const Person = mongoose.model('Person');
const faker = require('faker');

module.exports = {
  makeFake: function(req,res){
    let person = new Person({
      name: faker.name.findName()
    });
    person.save(function(err){
      if(err){
        console.log('error',err);
        res.json(err);
        return;
      } else {
      }
    });
  },

  index: function(req, res){
    Person.find({}).
      sort({createdAt: -1}).
      exec(function(err, _people){
        if(err){
          console.log(err);
          res.json(err);
        } else {
          console.log(_people);
           res.json(_people);
        }
      });
  },

  show: function(req, res){
    Person.find({}).
      sort({created_at: -1}).
      exec( function(err,persons){
      res.render('main', {persons: persons})
    });
  },


  create: function(req, res){
    let person = new Person({
      name: req.params.name,
    });
    person.save(function(err){
      if(err){
        console.log('something went wrong');
        res.json(err);
      } else{
        console.log(person);
        res.json(person);
      }
    });
  },
}
