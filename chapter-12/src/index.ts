import { Person, Product, City, Employee } from './dataTypes';

let people = [
  new Person('James McAvoy', 'Manchester'),
  new Person('Emma Stones', 'New York')
];

let products = [
  new Product('Hat', 12),
  new Product('Shoe', 20)
];

let cities = [
  new City('New York', 12),
  new City('Manchester', 15)
];

let employees = [
  new Employee('Emma Stones', 'Actress'),
  new Employee('Ryan Gosling', 'Actor')
];

class DataCollection<T extends { name: string }> {
  protected items: T[] = [];

  constructor(initialItems: T[]) {
    this.items = initialItems;
  }

  filter<V extends T>(predicate: (target) => target is V): V[] {
    return this.items.filter(item => predicate(item)) as V[];
  }

  static reverse<ArrayType>(items: ArrayType[]): ArrayType[] {
    return items.reverse();
  }
}

let mixedData = new DataCollection<Person | Product>([...people, ...products]);

function isProduct(target): target is Product {
  return target instanceof Product;
}

let filteredProducts = mixedData.filter(isProduct);
console.log(filteredProducts);

let reversedCities = DataCollection.reverse<City>(cities);
console.log(reversedCities);