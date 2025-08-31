console.log("Removing duplactes from array using Set")


const array1 = [1,2,3,2,5,4,6,5,3]

const box = new Set(array1);

const array2 = Array.from(box)

console.log("new array " + array2 );



console.log("Another example")

let fruits = ["apple", "banana","cherry", "guava","apple","banana"]

let newBox = new Set(fruits)

let newFruits = Array.from(newBox)

console.log("no duplicate fruits ", newFruits)


console.log("-------Another Method for removeing duplicates from an array--------")


const myMessyToyBox = ['car', 'ball', 'car', 'doll', 'ball', 'robot'];

console.log("My messy toy box:", myMessyToyBox);

const neatToyBox = myMessyToyBox.filter(function(toy, index, array) {
  // This is the picky helper's rule:
  // Is this toy the VERY FIRST TIME I've seen it in the original toy box?
  // 'array.indexOf(toy)' finds where this toy first appears in the original list.
  // 'index' is where we are RIGHT NOW in the list.
  // If they are the same, it means this is the first time we've seen this toy!
  return array.indexOf(toy) === index;
});

console.log("My neat toy box (no duplicates!):", neatToyBox);
// Output: ['car', 'ball', 'doll', 'robot']
