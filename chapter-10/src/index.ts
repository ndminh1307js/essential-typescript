type Product = {
  id: number,
  name: string,
  price?: number
};

type Person = {
  id: string,
  name: string,
  city: string
};

type UnionType = {
  id: number | string,
  name: string
}

let dataItems: UnionType[] = [
  { id: 1, name: 'Hat', price: 100 },
  { id: 2, name: 'Gloves', price: 75 },
  { id: 3, name: 'Umbrella', price: 30 },
  { id: 'bsmith', name: 'Bob', city: 'London' }
];

dataItems.forEach(item => console.log(`ID: ${item.id}, Name: ${item.name}`));