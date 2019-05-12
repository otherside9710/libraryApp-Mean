export class User {

  constructor(_id = '', name = '', lastName = '', email = '', password = '') {
    this._id = _id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  _id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
}
