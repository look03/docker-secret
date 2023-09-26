const Router = require('express')
const router = new Router()

router.get('/', (req, res) => {
    res.json({ message: 'ALL WORKING' })
})

module.exports = router