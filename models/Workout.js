const mongoose = require('mongoose')

const WorkoutSchema = new mongoose.Schema({
  workout: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }, 
  sets: {
    type: Number, 
    required: true,
  }, 
  reps: {
    type: Number, 
    required: true, 
  },
  weight: {
    type: Number, 
    required: true, 
  }, 
  comments: {
    type: String,
    required: false,
  }
})

module.exports = mongoose.model('Workout', WorkoutSchema)
