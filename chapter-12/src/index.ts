import { Person, Product, City } from './dataTypes';

let people = [
  new Person('James McAvoy', 'Manchester'),
  new Person('Emma Stones', 'New York')
];

let products = [
  new Product('Bitis Hunter', 20),
  new Product('Fuhlen G90', 15)
];

let cities = [
  new City('New York', 12),
  new City('Tokyo', 15)
];

class DataCollection<T extends { name: string }> {
  private items: T[] = [];

  constructor(initialItems: T[]) {
    this.items = initialItems;
  }

  add(newItem: T) {
    return this.items.push(newItem);
  }

  getNames(): string[] {
    return this.items.map(item => item.name);
  }

  getItem(index: number) {
    return this.items[index];
  }
}

let peopleData = new DataCollection<Person>(people);
let firstPerson = peopleData.getItem(0);
console.log(`First person: ${firstPerson.name}, ${firstPerson.city}`);
console.log(`Person names: ${peopleData.getNames().join(', ')}`);

let productData = new DataCollection<Product>(products);
let firstProduct = productData.getItem(0);
console.log(`First product: ${firstProduct.name}, ${firstProduct.price}`);
console.log(`Product names: ${productData.getNames().join(', ')}`);

let cityData = new DataCollection<City>(cities);
console.log(`City names: ${cityData.getNames().join(', ')}`);