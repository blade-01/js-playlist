// Object Literal
let userOne = {
  email: "animashaun@gmail.com",
  name: "blade",
  login() {
    console.log(this.email, "has logged in");
  },
  logout() {
    console.log(this.email, "has logged out");
  },
};

console.log(userOne.login());

// Creating different objects without repeating the same code - This can be done using CLASS (creates multiple objects of the same type)

// Best to start class name with uppercase

// Constructor function is responsible for creating a new user object

// In classes, we do not use ','
// the 'new' keyword
// - Creates a new empty object {}
// - Sets the value of 'this' to be the new empty object
// - Calls the constructor method

// Class and Costructor Function
class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.email, "has logged in");
    return this; // This is done in order to chain method
  }
  logout() {
    console.log(this.email, "has logged out");
    return this; // This is done in order to chain method
  }
}

// Instantiate each user
const userOnee = new User("me@gmail.com", "bladee");
const userTwo = new User("miday@gmail.com", "Mayday");

console.log(userOnee);
console.log(userTwo);

userOnee.login();
userTwo.logout();

// Method Chaining
userOnee.login().logout().login();

// Class Inheritance - Adds previous class to a new class
class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email; // This checks if users email tally with admin, if not it deletes the users email
    });
  }
}

// Instantiate admin
let admin = new Admin("mainman@gmail.com", "Ma-G");
let users = [userOnee, userTwo, admin];
admin.deleteUser(userTwo);

// userOne.deleteUser(userTwo); // This will output an error because only admin is permitted to delete and not the user (i.e. the class deleteUser is only attached to Admin)

console.log(users);
