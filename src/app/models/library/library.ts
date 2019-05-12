export class Library {

  constructor(_id = '', name = '', stock = '', office = '', salary = 0) {
    this._id = _id;
    this.name = name;
    this.stock = stock;
    this.office = office;
    this.salary = salary;
  }

  _id: string;
  name: string;
  stock: string;
  office: string;
  salary: number;
}