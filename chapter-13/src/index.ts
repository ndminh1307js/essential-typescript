import { Person, Product, City, Employee } from './dataTypes';

type Mapped<T> = {
	[P in keyof T]: T[P];
};

let p: Mapped<Product> = { name: 'Kayak', price: 275 };
console.log(p);

let e: Mapped<Employee> = { name: 'Murray', role: 'Developer' };
console.log(e);

// let products = [new Product('Running Shoe', 25), new Product('Hat', 12)];

// class Collection<T, K extends keyof T> implements Iterable<T> {
// 	private items: Map<T[K], T>;

// 	constructor(initialItems: T[] = [], private propertyName: K) {
// 		this.items = new Map<T[K], T>();
// 		this.add(...initialItems);
// 	}

// 	add(...newItems: T[]): void {
// 		newItems.forEach((item) => this.items.set(item[this.propertyName], item));
// 	}

// 	get(key: T[K]): T {
// 		return this.items.get(key);
// 	}

// 	get count(): number {
// 		return this.items.size;
// 	}

// 	[Symbol.iterator](): Iterator<T> {
// 		return this.items.values();
// 	}
// }

// let productCollection: Collection<Product, 'name'> = new Collection(
// 	products,
// 	'name'
// );

// let itemByKey = productCollection.get('Hat');
// console.log(itemByKey);
