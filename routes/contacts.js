const router = require("express").Router();
const userControllers = require('../controllers/contacts')

router.get('/', userControllers.getAllContacts)
router.get('/:id', userControllers.getSingleContact)

module.exports = router