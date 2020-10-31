type Person = {
  id: string,
  name: string,
  city: string
};

type Employee = {
  id: string,
  name: string,
  company: string,
  dept: string,
  writeDept: () => void
}

let Employee = function (id: string, name: string, company: string, dept: string) {
  this.id = id;
  this.name = name;
  this.company = company;
  this.dept = dept;
};

Employee.prototype.writeDept = function () {
  console.log(`${this.name} works in ${this.dept}`);
};

let salesEmployee = new Employee('shinichikudo', 'Conan Edogawa', 'Detective Conan', 'detective');

let dataItems: (Person | Employee)[] = [
  { id: 'megure', name: 'Megure', city: 'Tokyo' },
  { id: 'heiji', name: 'Heiji Hattori', city: 'Osaka' },
  { id: 'kazuha', name: 'Kazuha Toyama', city: 'Osaka' },
  salesEmployee
];

dataItems.forEach(item => {
  if ('dept' in item) {
    item.writeDept();
  } else {
    console.log(`${item.id} ${item.name} ${item.city}`);
  }
})