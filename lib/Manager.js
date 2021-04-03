const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officenumber) {
    super(name, id, email);
    this.officenumber = officenumber;
  }

}

Manager.prototype.getRole = function() {
  return "Manager"
}
module.exports = Manager;