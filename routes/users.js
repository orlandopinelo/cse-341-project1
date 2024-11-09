const router = require("express").Router();
const userControllers = require('../controllers/users')

router.get('/', userControllers.getAll)
router.get('/:id', userControllers.getSingle)

module.exports = router