export class Book {

  constructor(_id = '', name = '', editorial = '', genre = '', author = '', location = '', state = '', year_of_edition = '') {
    this._id = _id;
    this.name = name;
    this.editorial = editorial;
    this.genre = genre;
    this.author = author;
    this.location = location;
    this.state = state;
    this.year_of_edition = year_of_edition;
  }

  _id: string;
  name: string;
  editorial: string;
  genre: string;
  author: string;
  location: string;
  state: string;
  year_of_edition: string;

}
