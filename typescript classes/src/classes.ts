// Training classes object
class Department {
  name: string;
  code: number;
  private employees: string[] = [];

  constructor(name: string, code: number) {
    this.name = name;
    this.code = code;
  }

  describe() {
    return `Department: ${this.name}`;
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  removeEmployee(indexOrName?: number | string) {
    if (typeof indexOrName === 'number') {
      if (indexOrName >= 0 && indexOrName < this.employees.length) {
        this.employees.splice(indexOrName, 1);
      } else {
        console.log('Invalid name, employee not found');
      }
    } else if (typeof indexOrName === 'string') {
      const employeeToRemove = this.employees.find(
        (employee) => employee === indexOrName
      );
      if (employeeToRemove) {
        const index = this.employees.indexOf(employeeToRemove);
        this.employees.splice(index, 1);
      } else {
        console.log('Invalid index, employee not found');
      }
    }
    this.printEmployees();
  }

  printEmployees() {
    const employeesList = this.employees.join(', ');
    console.log(
      `Currently, we have a total of ${this.employees.length} employees called: ${employeesList}.`
    );
  }
}

const techArea = new Department('Technology', 21);
techArea.addEmployee('Max');
techArea.addEmployee('Pedro');
techArea.addEmployee('Silvia');
techArea.removeEmployee(12);

console.log(techArea);
