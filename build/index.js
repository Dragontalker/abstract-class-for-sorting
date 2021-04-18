"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// Bubble sort for array of numbers.
var numbersCollection = new NumbersCollection_1.NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
// Bubble sort for string.
var charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);
// Bubble sort for linked list.
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
