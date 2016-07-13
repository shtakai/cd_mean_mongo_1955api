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

  //show: function(req, res){
    //Person.find({}).
      //sort({created_at: -1}).
      //exec( function(err,persons){
      //res.render('main', {persons: persons})
    //});
  //},


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


  destroy: function(req, res){
    let person = Person.findOne({name: req.params.name}, function(err ,_person){
      console.log(_person);
      if(_person == null){
        console.log(`Person ${req.params.name} doesn't exist`);
        res.json({
          message: `Person ${req.params.name} doesn't exist`
        });
      } else {
        _person.remove(function(err){
          if(err){
            res.json(err);
          } else {
            res.json({
              result: `Person name:${req.params.name} is deleted`
            });
          }
        });
      }
    });
  },


}
