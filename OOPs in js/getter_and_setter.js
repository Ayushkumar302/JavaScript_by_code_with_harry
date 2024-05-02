// Getter and setter methods are used to control access
// to the attributes (fields) of a class in object-oriented programming.

// Getter Method: Retrieves the value of an attribute.
// Setter Method: Sets the value of an attribute.

// instanceof  operator 
// The instanceof operator returns true if the specified object is of the specified object type, and false otherwise.
// The instanceof operator is used to determine whether an object is an instance of a specific class or an instance of a subclass.

class animal {
  constructor(name) {
    this._name = name;
  }
  fly() {
    console.log("I am flying");
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    return this._name = newName
  }
}
let a = new animal("tommy");
a.fly();
console.log(a.name);
a.name="jack"
console.log(a.name);
console.log(a instanceof animal);//true 

