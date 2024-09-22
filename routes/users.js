const router = require("express").Router();
const userConrollers = require('../controllers/users')

router.get('/', userConrollers.getAll)
router.get('/:id', userConrollers.getSingle)

module.exports = router