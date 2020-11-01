import { Person, Product, City, Employee } from './dataTypes';

let products = [new Product('Running Shoe', 25), new Product('Hat', 12)];

type shapeType = { name: string };

class Collection<T extends shapeType> {
	private items: Set<T>;

	constructor(initialItems: T[]) {
		this.items = new Set<T>(initialItems);
	}

	add(...newItems: T[]): void {
		newItems.forEach((item) => this.items.add(item));
	}

	get(name: string): T | undefined {
		return [...this.items.values()].find((item) => item.name === name);
	}

	get count(): number {
		return this.items.size;
	}
}

let productCollection: Collection<Product> = new Collection(products);
console.log(`There are ${productCollection.count} products`);
let p = productCollection.get('Hat');
console.log(p);
