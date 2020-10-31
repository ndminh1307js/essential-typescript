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
  private items: T[] = [];

  constructor(initialItems: T[]) {
    this.items = initialItems;
  }

  collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
    let results = [];
    this.items.forEach(item => {
      let match = targetData.find(d => d[targetProp] === item[itemProp]);
      if (match) {
        results.push({ ...match, ...item });
      }
    });

    return results;
  }
}

let peopleData = new DataCollection<Person>(people);
let collatedData = peopleData.collate<City>(cities, 'city', 'name');
collatedData.forEach(c => console.log(`${c.name} ${c.city} ${c.population}`));
let empData = peopleData.collate<Employee>(employees, 'name', 'name');
empData.forEach(e => console.log(`${e.name} ${e.city} ${e.role}`));
