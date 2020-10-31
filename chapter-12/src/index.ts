import { Person, Product, City, Employee } from './dataTypes';

type shapeType = {
  name: string
};

interface Collection<T extends shapeType> {
  add(...newItems: T[]): void;
  get(name: string): T;
  count: number;
}

class ArrayCollection<DataType extends shapeType> implements Collection<DataType> {
  private items: DataType[] = [];

  constructor(initialItems: DataType[]) {
    this.items = initialItems;
  }

  add(...newItems: DataType[]) {
    return this.items.concat(newItems);
  }

  get(name: string): DataType {
    return this.items.find(item => item.name === name);
  }

  get count(): number {
    return this.items.length;
  }
}
let peoples = [
  new Person('James', 'Tokyo'),
  new Person('Lee', 'Seoul')
];
let peopleCollection: Collection<Person> = new ArrayCollection<Person>(peoples);
console.log(`Size: ${peopleCollection.count}`);

