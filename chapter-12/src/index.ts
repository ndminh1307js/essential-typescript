import { Person, Product, City, Employee } from './dataTypes';

type shapeType = {
	name: string;
};

interface Collection<T extends shapeType> {
	add(...newItems: T[]): void;
	get(searchTerm: string): T;
	count: number;
}

abstract class ArrayCollection<DataType extends shapeType>
	implements Collection<DataType> {
	protected items: DataType[] = [];

	constructor(initialItems: DataType[]) {
		this.items = initialItems;
	}

	add(...newItems: DataType[]): void {
		this.items.push(...newItems);
	}

	abstract get(searchTerm: string): DataType;

	get count(): number {
		return this.items.length;
	}
}

class ProductCollection extends ArrayCollection<Product> {
	get(searchTerm: string): Product | undefined {
		return this.items.find((item) => item.name === searchTerm);
	}
}

class PersonCollection extends ArrayCollection<Person> {
	get(searchTerm: string): Person | undefined {
		return this.items.find(
			(item) => item.name === searchTerm || item.city === searchTerm
		);
	}
}

let people = [new Person('James', 'Tokyo'), new Person('Lee', 'Seoul')];
let peopleCollection: Collection<Person> = new PersonCollection(people);
peopleCollection.add(new Person('Bill', 'Paris'));
console.log(peopleCollection);

let productCollection: Collection<Product> = new ProductCollection([
	new Product('Hat', 12),
	new Product('Shoe', 15),
]);
console.log(productCollection.get('Hat'));
