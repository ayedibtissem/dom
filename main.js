let people = ["Greg", "Mary", "Devon", "James"];
for(let i =0; i< people.length; i++){
}console.log(people[i]);
let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
 console.log(people);

let people=["Mary", "Devon", "James"];

people.pop();
 console.log(people);
 
 let people=["Mary", "Devon"];
 people.unshift("Matt");
console.log(people);

let people=["Matt", "Mary", "Devon"];
people.push("ibtissem");
console.log(people);


let  people =  ["Matt", "Mary", "Devon","ibtissem"];
let people2=people.slice(2);
console.log(people2);
let people=["Matt", "Mary", "Devon","ibtissem"];
console.log(people.dexOf("Mary"));
let people = ["Matt", "Mary", "Devon", "ibtissem"];
console.log(people.dexOf("foo"));
let people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "elizabeth", "Artie");
console.log(people);
let people = ["Greg", "Mary", "Devon", "James"];
let withBob = people.concat("Bob");
console.log(withBob);