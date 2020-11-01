import { Person, Product, City, Employee } from './dataTypes';

type targetKeys<T> = T extends (infer U)[] ? keyof U : keyof T;

function getValue<T, P extends targetKeys<T>>(data: T, propName: P): T[P] {
	if (Array.isArray(data)) {
		return data[0][propName];
	}

	return data[propName];
}

let products = [new Product('Kayak', 275), new Product('Lifejacket', 48.95)];
console.log(`Array value: ${getValue(products, 'price')}`);
