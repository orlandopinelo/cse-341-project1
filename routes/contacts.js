const router = require("express").Router();
const contactControllers = require('../controllers/contacts')
//const userControllers = require('../controllers/users')

router.get('/', contactControllers.getAllContacts)
router.get('/:id', contactControllers.getSingleContact)
router.post('/',contactControllers.createContact);
router.put('/:id',contactControllers.updateContact);
router.delete('/:id',contactControllers.deleteContact);


module.exports = router