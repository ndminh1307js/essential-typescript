type Person = {
  id: string,
  name: string,
  city: string
};

class Employee {
  constructor(
    public readonly id: string,
    public name: string,
    private dept: string,
    public city: string
  ) {
    // no statements required
  }

  writeDept() {
    console.log(`${this.name} works in the ${this.dept} deparment`);
  }
}

let salesEmployee = new Employee('shinichikudo', 'Conan Edogawa', 'Detective Conan', 'detective');
salesEmployee.writeDept();