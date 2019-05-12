export class Loan {

  constructor(_id = '', book = '', student = '', date_of_loan = '', date_of_return = '', returned = false) {
    this._id = _id;
    this.book = book;
    this.student = student;
    this.date_of_loan = date_of_loan;
    this.date_of_return = date_of_return;
    this.returned = returned;
  }

  _id: string;
  book: string;
  student: string;
  date_of_loan: string;
  date_of_return: string;
  returned: boolean;
}
