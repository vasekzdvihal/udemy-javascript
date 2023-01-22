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

