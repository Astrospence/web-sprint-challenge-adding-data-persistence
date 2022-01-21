const express = require('express')
const resourcesHelpers = require('./model')

const router = express.Router()

router.post('/', (req, res, next) => {
    resourcesHelpers.addResource(req.body)
        .then(newResource => {
            res.status(200).json(newResource)
        })
        .catch(next)
})

router.get('/', (req, res, next) => {
    resourcesHelpers.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(next)
})

module.exports = router