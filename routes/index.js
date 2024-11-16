const router = require("express").Router();

router.use('/', require('./swagger'));

//router.get('/', (reg, res) => {
    //#swagger.tags=['Hello World']  
  //  res.send('Hello World');
//});

//router.use('/users', require('./users'))


router.use('/contacts', require('./contacts'))


module.exports = router