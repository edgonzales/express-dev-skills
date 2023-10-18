// controllers/skills.js

const SkillModel = require('../models/skill');

module.exports = {
    index,
    getOne,
    new: newSkill,
    create
}

function index(req, res) {
    res.render('skills/index', { // 'skills' is found in views/skills.ejs | if it was under a folder titled 'skills' then it would be 'skills/skills' 
        skills: SkillModel.getAll()
    });
}

/*  Takes in req and res as arguments. The res has a render method that takes in a path, and allows for
a second argument, an object. In the object, variable skill is given a value derived from the 
SkillModel.getOne() function. In the getOne() function, the req's params.id has to be passed in.
*/
function getOne(req, res) {
    console.log(SkillModel.getOne(req.params.id));
    res.render('skills/show', {
        skill: SkillModel.getOne(req.params.id)
    });
}

function newSkill(req, res) {
    res.render('skills/new')
}

function create(req, res) {
    SkillModel.create(req.body)
    res.redirect('/skills');
}