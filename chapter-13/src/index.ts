import { Person, Product, City, Employee } from './dataTypes';

type resultType<T extends boolean> = T extends true ? string : number;

type reference = 'London' | 'Bob' | 'Kayak';

type nestedType<T extends reference> = T extends 'London'
	? City
	: T extends 'Bob'
	? Person
	: Product;

let first: nestedType<'London'> = new City('London', 8136000);
let second: nestedType<'Bob'> = new Person('Bob', 'London');
let third: nestedType<'Kayak'> = new Product('Kayak', 125);
