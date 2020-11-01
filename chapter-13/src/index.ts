import { Person, Product, City, Employee } from './dataTypes';

type Result<T> = T extends (...args: any) => infer R ? R : never;

function processArray<T, Func extends (T) => any>(
	data: T[],
	func: Func
): Result<Func>[] {
	return data.map((item) => func(item));
}

let selectName = (p: Product) => p.name;

let products = [new Product('Kayak', 275), new Product('Lifejacket', 48.95)];
let names: string[] = processArray(products, selectName);
console.log(names);

function makeObject<T extends new (...args: any) => any>(
	constructor: T,
	...args: ConstructorParameters<T>
): InstanceType<T> {
	return new constructor(...(args as any));
}

let prod: Product = makeObject(Product, 'Kayak', 275);
console.log(prod);
