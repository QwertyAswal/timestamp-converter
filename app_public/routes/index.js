const router = require('express').Router()
const controller = require('../controller/index')

router.get('', controller.generateHomeComponent)

module.exports = router