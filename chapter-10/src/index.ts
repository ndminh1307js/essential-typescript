type Person = {
  id: string,
  name: string,
  city: string,
  contact: { phone: number }
};

type Employee = {
  id: string,
  company: string,
  dept: string,
  contact: { address: string }
};

type EmployedPerson = Person & Employee;

let typeTest = ({} as EmployedPerson).contact;

let person1: EmployedPerson = {
  id: 'rpattinson',
  name: 'Robert Pattinson',
  city: 'London',
  company: 'Warner Bros',
  dept: 'World of DC',
  contact: {
    phone: 654321,
    address: '171 Sun Avenue, New York, USA'
  }
};

