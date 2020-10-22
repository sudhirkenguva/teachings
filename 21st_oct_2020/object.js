let a = {name: "Sudhir"};
let b = JSON.parse(JSON.stringify(a));

a.name = "Rajesh";


console.log(a);
console.log(b);