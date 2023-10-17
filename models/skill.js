const skills = [
    {id: 125223, skill: 'HTML', done: true},
    {id: 127904, skill: 'CSS', done: false},
    {id: 139608, skill: 'Javascript', done: false},
    {id: 140719, skill: 'Express', done: false}
  ];
	
  module.exports = {
    getAll
  };
	
  function getAll() {
    return skills;
  }
