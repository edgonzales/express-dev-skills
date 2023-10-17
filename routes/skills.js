var express = require('express');
var router = express.Router(); //'Router() is a factory function
var skillsCtrl = require('../controllers/skills');

// All actual paths start with '/skills'

// GET /todos
router.get('/', skillsCtrl.index);


// GET show
router.get('/:id', skillsCtrl.getOne);

module.exports = router;
