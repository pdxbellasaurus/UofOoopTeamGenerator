/* Intern extends Employee blueprint includes properties: school
and methods getSchool(), getRole() ;overridden to return Intern*/

const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
      return this.school;
  }

  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;