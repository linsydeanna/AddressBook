var ContactList = function () {
  this.book = [];
}

  var Contact = function(name, phone, address) {
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.added = new Date();
  }

  ContactList.prototype.addContact = function (person) {
    var contact = new Contact(person);
    var contactID = this.book.map((contact) => contact.id);
    contact.id = Math.max(contactID) +1;
    this.book.push(contact);
  }

  var community = new ContactList()

  ContactList.prototype.find = function (name) {
    return this.book.filter( (contact) => contact.name.includes(name));
  }

  ContactList.prototype.get = function (id) {
    return this.book.filter( (contact) => contact.id === id);
  }

  ContactList.prototype.removeContact = function (id) {
    var removeIndex = this.book.map((contact) => contact.id).indexOf(id);
    this.book.splice(removeIndex, 1);
  }
