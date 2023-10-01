import React from "react";

import "./App.css";

let bio: any; // not recommended
let address: unknown; // not recommended
let name: string; // string
let age: number; // number
let isStudent: boolean; // boolean
let hobbies: string[]; // array of string
let rating: number | string; // union

let role: [number, string]; // tuple (contain fixed value)

let person1: Object; // not recommeded

type Person = {
  name: string;
  age: number;
};

let person: Person = {
  name: "Haikal",
  age: 31,
};

let lotsOfPeople: Person[]; // Array of object

function printName(name: string) {
  console.log(name);
}

printName("haikal");

let printAge: Function; // Function type
let printBio: (name: string) => void; // Function type better way, void return undefined, never return nothing

// Interface
interface Man {
  name: string;
  age?: number;
}

type X = {
  a: string;
  b: number;
};

type Y = X & {
  // extending types
  // if we want to use X in Y
  c: string;
  d: number;
};

let y: Y = {
  a: "Haikal",
  b: 31,
  c: "along",
  d: 32,
};

interface Women extends Person {
  job: string;
}

type Z = Women & {
  isWifi: true;
};

function App() {
  return (
    <div className="App">
      <h1>Drag n drop</h1>
    </div>
  );
}

export default App;
