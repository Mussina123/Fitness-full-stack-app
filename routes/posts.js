const express = require('express')
const router = express.Router()
const postsController = require('../controllers/posts') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, postsController.getWorkouts)

router.post('/createTodo', postsController.createWorkout)

router.put('/markComplete', postsController.markComplete)

router.put('/markIncomplete', postsController.markIncomplete)

router.delete('/deleteTodo', postsController.deleteWorkout)

module.exports = router