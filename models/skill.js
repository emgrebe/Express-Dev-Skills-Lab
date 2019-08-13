const skills = [
    {skill: 'Front-End Languages', done: true},
    {skill: 'Python Knowledge', done: false},
    {skill: 'Ability to Develop Apps', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
    return skills[id];
  }
  
  function getAll() {
    return skills;
  }