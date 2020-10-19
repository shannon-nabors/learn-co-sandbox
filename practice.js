function log(s) {
  var s = 'Mr. X';
  console.log(s);
}

log('Hello!');

const person = {
  name: "Shannon",
  occupation: {title: "Consultant", yearsHeld: 5},
  pets: [{kind: "dog", name: "Watson"}, {kind: "cat", name: "Zelda"}]
}

console.log(person.pets[1].name);

const collections = [1, [2, [4, [5, [6]], 3]]];

function find(array, criteriaFn) {
  for (let i = 0; i < array.length; i++) {
    if (criteriaFn(array[i])) {
      return array[i];
    }
  }
}

function find(array, criteriaFn) {
  let current = array;
  let next = [];
  while(current) {
    if (criteriaFn(current)) {
      return current;
    }
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i]);
      }
    }
    current = next.shift();
  }
  return null;
}

console.log(find(collections, n => (typeof n === 'number' && n > 5)));