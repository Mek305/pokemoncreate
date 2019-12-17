// This file is to decide what to do when someone reaches localhost:8000/pokemon

const router = require('express').Router();
const controller = require('./controller');
// router.get(extension after localhost:8000/pokemon, the_controller method that matches)
router.get('/' , controller.index)

router.get('/new', controller.new);

router.get('/:id/update', controller.update);

router.get('/:id',controller.show)

// the order that place your routes in is called RESTFUL routing
// Any URLs that inslude a variable such as :id should be place towords the bottom of this page. This is because
// other extension (such as /new)

// in cases where you have a extension AFTER the variable (such as '/:id/update'), it should be place above the URL

module.exports = router