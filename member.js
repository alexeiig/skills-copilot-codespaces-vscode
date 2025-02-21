function skillsMember() {
  return {
    name: 'Member',
    skills: ['React', 'Node', 'MongoDB'],
    showSkills: function() {
      this.skills.forEach(function(skill) {
        console.log(`${this.name} knows ${skill}`);
      }.bind(this));
    }
  };
}