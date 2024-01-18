//! //////////
//! ES5 /////
//! //////////

const myString = "hey there";
console.log(typeof myString);
console.log(myString.toLocaleUpperCase());

const myString2 = new String("this is a string");
console.log("myString2 :>> ", typeof myString2);
console.log("myString2 :>> ", myString2);

console.log(window);
console.log(navigator.appVersion);

const superman = {
  name: "Superman",
  secretID: "Clark Kent",
  age: 569,
  getInfo: function () {
    return `${superman.name} secret identity is ${superman.secretID}`;
  },
};
console.log(superman);
console.log(superman.getInfo());

const spiderman = {
  name: "Spiderman",
  secretID: "Peter Parker",
  age: 17,
  getInfo: () => {
    console.log("inside spiderman object", this);
    return `${this.name} secret identity is ${this.secretID}`;
  },
};
console.log(spiderman.getInfo());

//! THIS
console.log(this);
//! CONSTRUCTOR
function Superhero(name, secretID, age) {
  // console.log("starting to build a superhero object");
  this.name = name;
  this.secretID = secretID;
  this.age = age;

  this.getInfo = function () {
    // console.log("inside spiderman object", this);
    return `${this.name} secret identity is ${this.secretID}`;
  };
}

// const sup1 = new Superhero();
const storm = new Superhero("Storm", "Ororo", "140");
console.log("storm", storm);
console.log("storm", storm.getInfo());

//! PROTOTYPE METHOD

Superhero.prototype.getInfo2 = function () {
  // console.log("inside spiderman object", this);
  return `${this.name} secret identity is ${this.secretID}`;
};

console.log("storm", storm);
console.log("storm", storm.getInfo2());

//! INHERITANCE

function SuperVillain(name, secretID, age, evilLevel) {
  Superhero.call(this, name, secretID, age);
  this.evilnessLevel = evilLevel;
}

const joker = new SuperVillain("The Joker", "Jo Ker", "40", "very very evil");
console.log("joker :>> ", joker);

//! Prototype Inheritance

SuperVillain.prototype = Object.create(Superhero.prototype);
const doom = new SuperVillain("Dr Doom", "Viktor", "60", "evil AF");
console.log("doom :>> ", doom); //? check the prototype. Is using Superhero constructor.

//? if we want to use the SuperVillain constructor, we can do:
Superhero.prototype.constructor = SuperVillain;
console.log("doom :>> ", doom); //? check the prototype. Now is using the SuperVillain constructor

//! OBJECT CREATE
// creating an object from scratch with Object.Create()

// First : create the methods we want to have in the Prototype
const prototypeMethods = {
  getInfo: function () {
    return `${this.name} is ${this.secretIdentity}`;
  },
  getDecades: function () {
    const decades = Math.round(this.age / 10);
    return `${this.name} has ${decades} decades`;
  },
};

// Second : use Object.create and pass the object with methods
const cyclops = Object.create(prototypeMethods);

// Third : add the properties with the values.
cyclops.secretIdentity = "scott";
cyclops.name = "cyclops";
cyclops.age = "29";

console.log("cyclops :>> ", cyclops);
//! ///////
//! ES6 CLASSES /////
//! ///////

class SuperheroClass {
  constructor(name, secretID, age) {
    this.name = name;
    this.secretID = secretID;
    this.age = age;
  }
  getInfo() {
    return `${this.name} secret identity is ${this.secretID}`;
  }
}

const batman = new SuperheroClass("Batman", "Bruce Wayne", 46);
console.log("batman :>> ", batman);

//! STATIC METHODS
// methods that can be use without having to instantiate an object
class ClassWithStaticMethod {
  constructor(message) {
    this.message = message;
  }
  static showMessage() {
    return `this is method run using directly the Class`;
  }
}
console.log(ClassWithStaticMethod.showMessage());

//! SUBCLASSES -  Extendes
class Villain2 extends SuperheroClass {
  constructor(name, secretID, age, evilLevel) {
    super(name, secretID, age);
    this.evilLevel = evilLevel;
  }
}

const magneto = new Villain2("Magneto", "Erik...", "56");
console.log("magneto :>> ", magneto.getInfo());
