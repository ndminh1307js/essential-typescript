import { Person, Product } from './dataTypes';

let people = [
  new Person('James McAvoy', 'Manchester'),
  new Person('Emma Stones', 'New York')
];

let products = [
  new Product('Bitis Hunter', 20),
  new Product('Fuhlen G90', 15)
];

// type dataType = Person | Product;

class DataCollection<T> {
  private items: T[] = [];

  constructor(initialItems: T[]) {
    this.items = initialItems;
  }

  add(newItem: T) {
    return this.items.push(newItem);
  }

  // getNames(): string[] {
  //   return this.items.map(item => item.name);
  // }

  getItem(index: number) {
    return this.items[index];
  }
}

let peopleData = new DataCollection<Person>(people);

// console.log(`Names: ${peopleData.getNames().join(', ')}`);
let firstPerson = peopleData.getItem(0);
// if (firstPerson instanceof Person) {
console.log(`First person: ${firstPerson.name}, ${firstPerson.city}`);
// }

let productData = new DataCollection<Product>(products);
let firstProduct = productData.getItem(0);
console.log(`First product: ${firstProduct.name}, ${firstProduct.price}`);