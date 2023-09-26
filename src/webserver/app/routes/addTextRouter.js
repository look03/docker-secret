const Router = require('express')
const router = new Router()
const textController = require('../controller/textController')

router.get('/add')
router.post('/add', textController.create)

module.exports = router