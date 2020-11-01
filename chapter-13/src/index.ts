import { Person, Product, City, Employee } from './dataTypes';

let products = [new Product('Running Shoe', 25), new Product('Hat', 12)];

type shapeType = { name: string };

class Collection<T extends shapeType> {
	private items: Map<string, T>;

	constructor(initialItems: T[] = []) {
		this.items = new Map<string, T>();
		this.add(...initialItems);
	}

	add(...newItems: T[]): void {
		newItems.forEach((newItem) => this.items.set(newItem.name, newItem));
	}

	get(name: string): T | undefined {
		return this.items.get(name);
	}

	get count(): number {
		return this.items.size;
	}

	values(): IterableIterator<T> {
		return this.items.values();
	}
}

let productCollection: Collection<Product> = new Collection(products);
console.log(`There are ${productCollection.count} products`);

[...productCollection.values()].forEach((p) =>
	console.log(`Product: ${p.name}, ${p.price}`)
);
