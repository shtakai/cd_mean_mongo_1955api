// sample model
// require mongoose
const mongoose = require('mongoose');

// create the schema
const PersonSchema = new mongoose.Schema({
  name: String,
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

// register the schema as a model
const Person = mongoose.model('Person', PersonSchema);
