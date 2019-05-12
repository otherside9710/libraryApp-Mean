export class Student {

  constructor(_id = '', nocarnet = '', name = '', lastName = '', direction = '',
              phone = '', email = '', gender = '',
              hooby = '', department = '', municipality = '') {
    this._id = _id;
    this.nocarnet = nocarnet;
    this.name = name;
    this.lastName = lastName;
    this.direction = direction;
    this.phone = phone;
    this.email = email;
    this.gender = gender;
    this.hooby = hooby;
    this.department = department;
    this.municipality = municipality;
  }

  _id: string;
  nocarnet: string;
  name: string;
  lastName: string;
  direction: string;
  phone: string;
  email: string;
  gender: string;
  hooby: string;
  department: string;
  municipality: string;

}
