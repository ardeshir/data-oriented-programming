class Author {
    constructor(firstName, lastName, books) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.books = books;
    }
    fullName() {
        return this.firstName + " " + this.lastName;
    }
    isProlific() {
        return this.books > 100;
    }
}

var obj = new Author("Isaac", "Asimov", 500); // Isaac Asimov wrote 500 books!
obj.fullName();
