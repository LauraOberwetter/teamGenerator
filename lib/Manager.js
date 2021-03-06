const Employee = require('./Employee'); //importing depend. 

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole () {
        return `Manager`;
    }

}

module.exports = Manager;