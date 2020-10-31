type Person = {
  id: string,
  name: string,
  city: string,
  getContact(field: string): string
};

type Employee = {
  id: string,
  company: string,
  dept: string,
  getContact(field: number): number
};

type EmployedPerson = Person & Employee;

let person: EmployedPerson = {
  id: 'rpattinson',
  name: 'Robert Pattinson',
  city: 'London',
  company: 'Warner Bros',
  dept: 'World of DC',
  getContact(field: string | number): any {
    return typeof field === 'string' ? '81 Time Square' : 654321;
  }
};

let typeTest = person.getContact;
let stringParamTest = person.getContact('Pattinson');
let numberParamTest = person.getContact(654321);

console.log(`Contact: ${stringParamTest}`);
console.log(`Contact: ${numberParamTest}`);
