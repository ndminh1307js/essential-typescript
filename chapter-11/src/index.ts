interface Person {
  name: string;
  getDetails(): string
}

interface DogOwner extends Person {
  dogName: string;
  getDogDetails(): string;
}

class Employee implements Person {
  constructor(
    public readonly id: string,
    public name: string,
    private dept: string,
    public city: string
  ) { }

  getDetails() {
    return `${this.name} works in ${this.dept}`;
  }
}

class Customer implements DogOwner {
  constructor(
    public readonly id: string,
    public name: string,
    public city: string,
    public creditLimit: number,
    public dogName: string
  ) { }

  getDetails() {
    return `${this.name} has ${this.creditLimit} limit`;
  }

  getDogDetails() {
    return `${this.name} has a dog named ${this.dogName}`;
  }
}

class Supplier implements Person {
  constructor(
    public readonly id: string,
    public name: string,
    public city: string,
    public companyName: string
  ) { }

  getDetails() {
    return `${this.name} works for ${this.companyName}`;
  }
}

let bella = new Customer('bella', 'Isabella Swan', 'Ariana', 500, 'Lulu');

let dogOwners: Customer[] = [bella];

let data: Person[] = [
  bella,
  new Employee('edward', 'Edward Cullen', 'Vampire', 'Ariana')
];

data.push(new Supplier('kylian', 'Kylian Mbappe', 'Paris', 'PSG'));


dogOwners.forEach(item => console.log(item.getDogDetails()));
data.forEach(item => console.log(item.getDetails()));