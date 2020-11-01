import { Person, Product, City, Employee } from './dataTypes';

type changeProps<T, U, V> = {
	[P in keyof T]: T[P] extends U ? V : T[P];
};

type modifiedProducts = changeProps<Product, number, string>;

function convertProduct(p: Product): modifiedProducts {
	return {
		name: p.name,
		price: `$${p.price.toFixed(2)}`,
	};
}

let kayak = convertProduct(new Product('Kayak', 275));
console.log(kayak);
