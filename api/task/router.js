const express = require('express')
const tasksHelpers = require('./model')

const router = express.Router()

router.post('/', (req, res, next) => {
    tasksHelpers.addTask(req.body)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(next)
})

router.get('/', (req, res, next) => {
    tasksHelpers.getTasks()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(next)
})

module.exports = router