const router = require("express").Router();

//router.get('/', (reg, res) => {res.send('Hello World');});

router.use('/users', require('./users'))

module.exports = router