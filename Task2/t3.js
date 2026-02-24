//Create a Map to store student names and marks. Add entries, check existence, delete one, and iterate over the Map.

const students=new Map();

students.set("Aryan",94);
students.set("Mac",90);
students.set("Virat",85);
students.set("Rahul",77);

console.log(students.has("Aryan")); 

students.delete("Rahul");

console.log("Iterating over remaining students:");
for (const [name,marks] of students) {
  console.log(name, marks);
}