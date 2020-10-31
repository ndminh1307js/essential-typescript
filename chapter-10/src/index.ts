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

let dataItems: (Product | Person)[] = [
  { id: 1, name: 'Hat', price: 100 },
  { id: 2, name: 'Gloves', price: 75 },
  { id: 3, name: 'Umbrella', price: 30 },
  { id: 'bsmith', name: 'Bob', city: 'London' }
];

dataItems.forEach(item => {
  if ('city' in item) {
    console.log(`Person: ${item.name} - ${item.city}`);
  } else {
    console.log(`Product: ${item.name} - ${item.price}`);
  }
});