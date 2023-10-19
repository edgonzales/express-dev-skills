const skills = [
  { id: 125223, name: 'HTML', done: true },
  { id: 127904, name: 'CSS', done: false },
  { id: 139608, name: 'Javascript', done: false },
  { id: 140719, name: 'Express', done: false }
];

module.exports = {
  getAll,
  show,
  create,
};

function getAll() {
  return skills;
}

/* Takes in an argument of id. Creates a const that loops through the skills object. If the id found 
in the skill item matches with the arg id, then it stops the loop and returns the object where the id
belongs and also it's other key:values found in the same object. In the return, the arg id is converted 
to an int so that it can be strictly compared to the skill.id int.
*/
function show(id) {
  const mySkill = skills.find((skill) => {
    return skill.id === parseInt(id); // converts the id into a string
  });
  console.log(mySkill + " !!!!!!!!!!!!!!");
  return mySkill;
}

function create(body) {
  const skill = { 
    id: skills.length + 1,
    name: body.skillName,
    done: false
  } 
  //skill.id = Date.now() % 1000000;
  
  skills.push(skill);
}
