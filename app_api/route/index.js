const router = require('express').Router()
const controller = require('../controller/index')

router.get('/:date', controller.getDate)

module.exports = router