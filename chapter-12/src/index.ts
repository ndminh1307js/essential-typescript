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

class SearchableCollection<T extends (Person | Employee)> extends DataCollection<T> {
  constructor(initialItems: T[]) {
    super(initialItems);
  }

  find(searchTerm: string): T[] {
    return this.items.filter(item => {
      if (item instanceof Employee) {
        return item.name === searchTerm || item.role === searchTerm
      } else if (item instanceof Person) {
        return item.name === searchTerm || item.city === searchTerm
      }
    });
  }


}

let employeeData = new SearchableCollection<Employee>(employees);
let foundEmp = employeeData.find('Actor');
console.log(foundEmp);
