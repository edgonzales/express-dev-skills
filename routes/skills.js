var express = require('express');
var router = express.Router(); //'Router() is a factory function
var skillsCtrl = require('../controllers/skills');

// All actual paths start with '/skills'

// GET /todos
router.get('/', skillsCtrl.index);

// GET new
router.get('/new', skillsCtrl.new)

// GET show
router.get('/:id', skillsCtrl.show);

// POST new skill
router.post('/', skillsCtrl.create);

router.delete('/:id', skillsCtrl.delete);

module.exports = router;
