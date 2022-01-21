const express = require('express')
const projectsHelpers = require('./model')

const router = express.Router()

router.post('/', (req, res, next) => {
    projectsHelpers.addProject(req.body)
        .then(newProject => {
            res.status(200).json(newProject)
        })
        .catch(next)
})

router.get('/', (req, res, next) => {
    projectsHelpers.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
})

module.exports = router