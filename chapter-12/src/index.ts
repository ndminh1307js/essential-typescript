import { Person, Product, City, Employee } from './dataTypes';

type Name = {
  name: string
};

interface Collection<T extends Name> {
  add(...newItems: T[]): void;
  get(name: string): T;
  count: number;
}

interface SearchableCollection<T extends Name> extends Collection<T> {
  find(name: string): T | undefined;
}

interface ProductCollection extends Collection<Product> {
  sumPrices(): number;
}

interface PeopleCollection<T extends Person | Employee> extends Collection<T> {
  getNames(): string[]
}