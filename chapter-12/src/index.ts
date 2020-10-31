import { Person, Product } from './dataTypes';

let people = [
  new Person('James McAvoy', 'Manchester'),
  new Person('Emma Stones', 'New York')
];

let products = [
  new Product('Bitis Hunter', 20),
  new Product('Fuhlen G90', 15)
];

type dataType = Person | Product;

class DataCollection {
  private items: dataType[] = [];

  constructor(initialItems: dataType[]) {
    this.items = initialItems;
  }

  add(newItem: dataType) {
    return this.items.push(newItem);
  }

  getNames(): string[] {
    return this.items.map(item => item.name);
  }

  getItem(index: number) {
    return this.items[index];
  }
}

let peopleData = new DataCollection(people);

console.log(`Names: ${peopleData.getNames().join(', ')}`);
let firstPerson = peopleData.getItem(0);
if (firstPerson instanceof Person) {
  console.log(`First person: ${firstPerson.name}, ${firstPerson.city}`);
}