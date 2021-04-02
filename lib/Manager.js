/* Manger extends Employee blueprint includes properties: officeNumber
and methods getRole();overridden to return Manager
*/

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  //Not in README, and need method to get the number
  getOfficeNumber() {
    return this.officeNumber;
}

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;