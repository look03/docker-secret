const Router = require('express')
const router = new Router()
const addTextRouter = require('./addTextRouter')
const textRouter = require('./textRouter')
const homeRouter = require('./homeRouter')

// router.use('/', homeRouter)
router.use('/text', addTextRouter)
router.use('/', textRouter)

module.exports = router