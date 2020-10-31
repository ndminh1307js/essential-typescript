interface Person {
  name: string;
  getDetails(): string;

  dogName?: string;
  getDogDetails?(): string;
}

abstract class AbstractDogOwner {
  abstract name: string;
  abstract dogName?: string;

  abstract getDetails();

  getDogDetails() {
    if (this.dogName) {
      return `${this.name} has a dog named ${this.dogName}`;
    }
  }
}

class DogOwningCustomer extends AbstractDogOwner {
  constructor(
    public readonly id: string,
    public name: string,
    public city: string,
    public creditLimit: number,
    public dogName: string
  ) {
    super();
  }

  getDetails() {
    return `${this.name} has ${this.creditLimit} limit`;
  }
}

let bella = new DogOwningCustomer('bella', 'Isabella Swan', 'Ariana', 500, 'Lulu');

if (bella.dogName) {
  console.log(bella.getDogDetails());
}
