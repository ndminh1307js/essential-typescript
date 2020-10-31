import { Person, Product, City } from './dataTypes';

let people = [
  new Person('James McAvoy', 'Manchester'),
  new Person('Emma Stones', 'New York')
];

let cities = [
  new City('New York', 12),
  new City('Manchester', 15)
];

class DataCollection<T extends { name: string }, U> {
  private items: T[] = [];

  constructor(initialItems: T[]) {
    this.items = initialItems;
  }

  collate(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
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

let peopleData = new DataCollection<Person, City>(people);
let collatedData = peopleData.collate(cities, 'city', 'name');
collatedData.forEach(c => console.log(`${c.name} ${c.city} ${c.population}`));
