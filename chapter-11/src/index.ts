abstract class Person {
  constructor(
    public id: string,
    public name: string,
    public city: string
  ) { }

  getDetails(): string {
    return `${this.name}, ${this.getSpecificDetails()}`;
  }

  abstract getSpecificDetails(): string;
}

class Employee extends Person {
  constructor(
    public readonly id: string,
    public name: string,
    private dept: string,
    public city: string
  ) {
    super(id, name, city);
  }

  writeDept() {
    console.log(`${this.name} works in the ${this.dept} deparment`);
  }

  getSpecificDetails() {
    return `works in ${this.dept}`;
  }
}

class Customer extends Person {
  constructor(
    public readonly id: string,
    public name: string,
    public city: string,
    public creditLimit: number
  ) {
    super(id, name, city);
  }

  getSpecificDetails() {
    return `has ${this.creditLimit} limit`;
  }
}

class Supplier extends Person {
  constructor(
    public readonly id: string,
    public name: string,
    public city: string,
    public companyName: string
  ) {
    super(id, name, city);
  }

  getSpecificDetails() {
    return `works for ${this.companyName}`;
  }
}

let data: Person[] = [
  new Customer('bella', 'Isabella Swan', 'Ariana', 500),
  new Employee('edward', 'Edward Cullen', 'Vampire', 'Ariana')
];

data.push(new Supplier('kylian', 'Kylian Mbappe', 'Paris', 'PSG'));

data.forEach(item => console.log(item.getDetails()));