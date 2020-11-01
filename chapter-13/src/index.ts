import { Person, Product, City, Employee } from './dataTypes';

let products = [new Product('Running Shoe', 25), new Product('Hat', 12)];

function getValue<T, K extends keyof T>(item: T, keyname: K): T[K] {
	return item[keyname];
}

// type priceType = Product['price'];
// type allTypes = Product[keyof Product];

let p = new Product('Running Shoe', 100);
console.log(getValue<Product, 'name'>(p, 'name'));
console.log(getValue(p, 'price'));

let e = new Employee('Bob', 'Director');
console.log(getValue(e, 'name'));
console.log(getValue(e, 'role'));
