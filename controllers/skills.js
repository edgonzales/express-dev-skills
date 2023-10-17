// controllers/skills.js

const Skill = require('../models/skill');

module.exports = {
    index,
    getOne,
}

function index(req, res) {
    res.render('skills/index', { // 'skills' is found in views/skills.ejs | if it was under a folder titled 'skills' then it would be 'skills/skills' 
        skills: Skill.getAll()
    });
}

function getOne(req, res) {
    console.log(Skill.getOne(req.params.id));
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
}