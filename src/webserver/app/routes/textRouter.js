const Router = require('express')
const router = new Router()
const textController = require('../controller/textController')

router.get('/:id', textController.getOne)

module.exports = router