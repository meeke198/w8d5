Function.prototype.inherits2 = function(superclass) {
  function Surrogate() {}
  Surrogate.prototype = superclass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

Function.prototype.inherits = function(superclass) {
  this.prototype = Object.create(superclass.prototype);
  this.prototype.constructor = this;
}

function MovingObject () {}
MovingObject.prototype.moves = function() {
  console.log("moving object is moving");
}

let mo = new MovingObject();

function Ship () {}
Ship.inherits(MovingObject);
Ship.prototype.sail = function() {
  console.log("sailing now");
}

let ship = new Ship();
console.log(ship.__proto__.constructor);
console.log(ship.__proto__.__proto__ === MovingObject.prototype);

function Asteroid () {}
Asteroid.inherits(MovingObject);
Asteroid.prototype.flyInSpace = function() {
  console.log("flying in space now");
}

let asteroid = new Asteroid();
console.log(asteroid.__proto__.__proto__ === MovingObject.prototype);

mo.moves();
ship.moves();
asteroid.moves();

ship.sail();
asteroid.flyInSpace();

//ship.flyInSpace();
//asteroid.sail();

// function Cat(name) {
//   this.name = name;
// }

// Cat.prototype.meow = function() {
//   console.log("meow");
// }


// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   meow() {
//     console.log("meow");
//   }
// }
