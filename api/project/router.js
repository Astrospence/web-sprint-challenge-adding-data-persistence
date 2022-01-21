const express = require('express')
const projectsHelpers = require('./model')

const router = express.Router()

router.post('/', (req, res, next) => {
    console.log('post response here')
})

router.get('/', (req, res, next) => {
    console.log('get response here')
})

module.exports = router