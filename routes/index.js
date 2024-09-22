const router = require("express").Router();

router.get('/', (reg, res) => {res.send('Hello World');});

module.exports = router