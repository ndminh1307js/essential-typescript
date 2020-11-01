import { Person, Product, City, Employee } from './dataTypes';

type Mapped<T> = {
	[P in keyof T]: T[P];
};

type MakeOptional<T> = {
	[P in keyof T]?: T[P];
};

type MakeRequired<T> = {
	[P in keyof T]-?: T[P];
};

type MakeReadOnly<T> = {
	readonly [P in keyof T]: T[P];
};

type MakeReadWrite<T> = {
	-readonly [P in keyof T]: T[P];
};

type optionalType = MakeOptional<Product>;
type requiredType = MakeRequired<optionalType>;
type readonlyType = MakeReadOnly<requiredType>;
type readwriteType = MakeReadWrite<readonlyType>;

let p: readwriteType = new Product('Shoe', 125);
console.log(p);
