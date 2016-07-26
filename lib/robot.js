'use strict';

var directions = [ 'east', 'west', 'north', 'south' ];

var Robot = class Robot {
  constructor() {
    this.bearing = "north";
    this.coordinates = [0, 0];
  }
  orient(direction) {
    if (directions.includes(direction)) {
      this.bearing = direction;
    } else {
      throw new Error("Invalid Robot Bearing");
    }
  }
  at(x, y) {
    this.coordinates = [x, y];
  }

  turnRight() {
    if (this.bearing === "north") {
      this.bearing = "east";
    } else if (this.bearing === "east") {
      this.bearing = "south";
    } else if (this.bearing === "south") {
      this.bearing = "west";
    } else if (this.bearing === "west") {
      this.bearing = "north";
    }
  }
  turnLeft() {
    if (this.bearing === "north") {
      this.bearing = "west";
    } else if (this.bearing === "east") {
      this.bearing = "north";
    } else if (this.bearing === "south") {
      this.bearing = "east";
    } else if (this.bearing === "west") {
      this.bearing = "south";
    }
  }

  advance() {
    if (this.bearing === "north") {
      this.coordinates[1] += 1
    } else if (this.bearing === "east") {
      this.coordinates[0] += 1
    } else if (this.bearing === "south") {
      this.coordinates[1] -= 1
    } else if (this.bearing === "west") {
      this.coordinates[0] -= 1
    }
  }

  instructions(instruction) {
    let result = []
    for (var i = 0; i < instruction.length; i++) {
      if (instruction[i] === "L") {
        result.push("turnLeft");
      } else if (instruction[i] === "R") {
        result.push("turnRight");
      } else if (instruction[i] === "A") {
        result.push("advance");
      }
    }
    return result;
  }

  // place() {
  //   this.place = {
  //     x: this.coordinates[0],
  //     y: this.coordinates[1],
  //     direction: this.orient
  //   }
  // }
  place(obj) {
    this.bearing = obj["direction"];
    this.coordinates = [obj["x"], obj["y"]];
  }

  evaluate(instruction) {
    let inst = this.instructions(instruction);
    for (let i = 0; i < inst.length; i++) {
      if (inst[i] === "turnRight") {
        this.turnRight();
      } else if (inst[i] === "turnLeft") {
        this.turnLeft();
      } else if (inst[i] === "advance"){
     this.advance();
    }
  }
 }
}
