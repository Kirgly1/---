class Employee {
    constructor(name) {
        this._name = name;
        this._personalNum = this.calculatePersonalNumber();
    }

    calculatePersonalNumber() {
        return this._name.length;
    }

    displayInfo() {
        console.log(`Name: ${this._name} - Personal Number: ${this._personalNum}`);
    }
}

class EmployeeList {
    constructor(employees) {
        this.employees = employees.map(name => new Employee(name));
    }

    displayEmployeeList() {
        this.employees.forEach(employee => {
            employee.displayInfo();
        });
    }
}

const employeesData = [
    'Silas Butler1',
    'Adnaan Buckley12',
    'Juan Peterson123',
    'Brendan Villarreal1234'
];

const employeeList = new EmployeeList(employeesData);
employeeList.displayEmployeeList();