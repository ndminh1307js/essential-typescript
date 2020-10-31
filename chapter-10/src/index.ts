type Person = {
  id: string,
  name: string,
  city: string
};

type Employee = {
  id: string,
  company: string,
  dept: string
};

type EmployedPerson = Person & Employee;

function correlatedData(
  peopleData: Person[],
  staff: Employee[]
): EmployedPerson[] {
  const defaults = { company: 'None', dept: 'None' };
  return peopleData.map(p => ({
    ...p,
    ...staff.find(e => e.id === p.id) || { ...defaults, id: p.id }
  }));
}

let people: Person[] = [
  { id: 'bsmith', name: 'Bob Smith', city: 'London' },
  { id: 'ajones', name: 'Alice Jones', city: 'Paris' },
  { id: 'dpeters', name: 'Dora Peters', city: 'New York' }
];

let employees: Employee[] = [
  { id: 'bsmith', company: 'Samsung', dept: 'R&D' },
  { id: 'dpeters', company: 'Apple', dept: 'Marketing' }
];

let dataItems: EmployedPerson[] = correlatedData(people, employees);

dataItems.forEach(item => {
  console.log(`- Person: ${item.id}, ${item.name}, ${item.city}`);
  console.log(`Employee: ${item.company}, ${item.dept}`);
});