const db = require('../util/database')
const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageURL, description, price) {
    this.id = id;
    this.title = title;
    this.imageURL = imageURL;
    this.description = description;
    this.price = price;
  }

  save() {
   return db.execute('insert into products (title, price, imageURL, description) values (?, ?, ?, ?)',
    [this.title, this.price, this.imageURL, this.description]
   );
  }

  static deleteById(id) {
   
  }

  static fetchAll() {
    return db.execute('select * from products');
  }

  static findById(id, ) {
    return db.execute('select * from products where products.id = ?',
    [id]
   );
  }
};
