// ---------------------
// Hash table (hash map)
// ---------------------

// What is a hash table?
// A data structure that uses key-value pairs
// It's like an array, but the keys are not ordered
// Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values

// Why should I care?
// Nearly all programming languages have some sort of hash table data structure
// Because of their speed, hash tables are very commonly used

// Hash table in the wild
// Python, C# has Dictionaries
// JavaScript has Objects and Maps*
// Java, Go, and Scala have Maps
// Ruby has Hashes

// Imagine you  want to store some colors
// We could use an array
// ["#ff69b4", "#ffa500", "#ff6347", "#ff0000", "#ff1493", "#ff4500"]
// It would be nice if instead of using indices to access the colors, we could use more human-readable keys
// pink -> "#ff69b4"
// orange -> "#ffa500"
// tomato -> "#ff6347"
// red -> "#ff0000"
// hotpink -> "#ff1493"
// orangered -> "#ff4500"
//
// colors["tomato"] is way better than colors[2]
// How can we get human-readability and computer readability?
// Computers don't know how to find an element at index tomato!

// The HASH part
//  The implement a has table, we'll be using an array.
// In order to look up values by key, we need a way to convert keys into valid array indices
// A function that performs this task is called a hash function

// What makes a good hash?
// (not a cryptographically secure one)
// Fast (i.e. constant time)
// Doesn't cluster outputs at specific indices, but distributes uniformly
// Deterministic (same input yields same output)

// Dealing with collisions
// What if we have two keys that map to the same index?
// There are many strategies for dealing with this problem
// 1. Separate chaining
// 2. Linear probing

// Separate chaining
// With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list)
// This allows us to store multiple key-value pairs at the same index

// Linear probing
// With linear probing, when we find a collision, we search through the array to find the next empty slot
// Unlike with separate chaining, this allows us to store a single key-value at each index

// BIG O of Hash Tables
// Insertion - O(1)
// Deletion - O(1)
// Access - O(1)

// Recap
// Hash tables are collections of key-value pairs
// They can find values quickly given a key
// They can add new key-values quickly
// They store data in a large array, and work by hashing the keys
// A good hash should be fast, distribute keys uniformly, and be deterministic
// Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index


class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      // map "a" to 1, "b" to 2, "c" to 3, etc.
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // SET
  // Accepts a key and a value
  // Hashes the key
  // Stores the key-value pair in the hash table array via separate chaining
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  // GET
  // Accepts a key
  // Hashes the key
  // Retrieves the key-value pair in the hash table
  // If the key isn't found, returns undefined
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  // KEYS
  // Loops through the hash table array and returns an array of keys in the table
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  // VALUES
  // Loops through the hash table array and returns an array of values in the table
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("purple", "#DDA0DD");
console.log(ht);

console.log(ht.get("maroon"));
console.log(ht.get("yellow"));
console.log(ht.get("olive"));
console.log(ht.get("nonexistent"));

console.log('keys', ht.keys());
console.log(ht.values());
