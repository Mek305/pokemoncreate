// express
const router = require('express').Router();

router.use('/api', require('./controllers/api'));
router.use('/pokemon', require('./controllers/pokemon'));

// handles the request to localhost:8000/
router.get('/',(req,res) => res.render('index'))

module.exports = router