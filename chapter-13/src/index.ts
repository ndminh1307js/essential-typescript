import { Person, Product, City, Employee } from './dataTypes';

type resultType<T extends boolean> = T extends true ? string : number;

class Collection<T> {
	private items: T[];

	constructor(...initialItems: T[]) {
		this.items = initialItems || [];
	}

	total<P extends keyof T, U extends boolean>(
		propName: P,
		format: U
	): resultType<U> {
		let totalValue = this.items.reduce(
			(total, item) => (total += Number(item[propName])),
			0
		);

		return format ? `$${totalValue.toFixed(2)}` : (totalValue as any);
	}
}

let data = new Collection<Product>(
	new Product('Hat', 15),
	new Product('Shoe', 25),
	new Product('Kayak', 125)
);

console.log(data.total('price', false));
