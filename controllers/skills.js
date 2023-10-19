// controllers/skills.js

const SkillModel = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}

function deleteSkill(req, res){
    console.log('Hello delete!')
    console.dir(req + "delete skill working????");
    SkillModel.deleteOne(req.params.id);
    res.redirect('/skills');
}

function index(req, res) {
    res.render('skills/index', { // 'skills' is found in views/skills.ejs | if it was under a folder titled 'skills' then it would be 'skills/skills' 
        skills: SkillModel.getAll()
    });
}

/*  Takes in req and res as arguments. The res has a render method that takes in a path, and allows for
a second argument, an object. In the object, variable skill is given a value derived from the 
SkillModel.show() function. In the show() function, the req's params.id has to be passed in.
*/
function show(req, res) {
    console.log(SkillModel.show(req.params.id));
    res.render('skills/show', {
        skill: SkillModel.show(req.params.id)
    });
}

function newSkill(req, res) {
    res.render('skills/new')
}

function create(req, res) {
    console.log('Hello world!')
    console.dir(req + "Hiiiiiii");
    SkillModel.create(req.body)
    res.redirect('/skills');
}