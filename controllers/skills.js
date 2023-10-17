// controllers/skills.js

const Skill = require('../models/skill');

module.exports = {
    index
}

function index(req, res) {
    res.render('skills', { // 'skills' is found in views/skills.ejs | if it was under a folder titled 'skills' then it would be 'skills/skills' 
        skills: Skill.getAll()
    });
}