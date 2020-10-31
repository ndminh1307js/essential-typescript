interface Person {
  name: string;
  getDetails(): string;
}

interface Product {
  name: string;
  price: number;
}

class Employee implements Person {
  constructor(public name: string, public company: string) { }

  getDetails() {
    return `${this.name} works for ${this.company}`;
  }
}

class SportsProduct implements Product {
  constructor(public name: string, public category: string,
    public price: number) { }
}

let data: (Person | Product)[] = [
  new Employee('Harry Potter', 'Hogwarts'),
  new SportsProduct('Mjolnir', 'Hammer', 100),
  new Employee('Hermione', 'Hogwarts')
];

data.forEach(item => {
  if ('getDetails' in item) {
    console.log(`Person: ${item.getDetails()}`);
  } else {
    console.log(`Product: ${item.name}, ${item.price}`);
  }
});
