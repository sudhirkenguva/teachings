// var a = [1, 4, 5, 2, -10, 9];

// a.sort(function(a,b) {
//   return b-a;
// });

// console.log(a);

// each character has ASCII code

// a --> 97
// b --> 98
// ...
// z --> 122

// A --> 65
// B --> 66
// ...
// Z --> 90

// 0 --> 48
// 1 --> 49 
// ...
// 9 --> 57

// Rajesh < Santosh
// Rajesh < santosh

// Jan > Feb
// Jan > Jam


// let a = ["Jan", "Feb", "Mar", "Apr"];

// a.sort();
// console.log(a)


let a = [1, 5, 3, 2, 10];

// console.log(Math.min(...a))

//Array iteration

// for(let i = 0; i < a.length; i++) {
//   console.log(i, "-", a[i]);
// }

// a.forEach(function(elem, ind, arr) {
//   console.log(elem*elem)
// })


let months = [
  {
    name: "Dec",
    order: 12
  },
  {
    name: "Jan",
    order: 1
  },
  {
    name: "Mar",
    order: 3
  },{
    name: "Apr",
    order: 4
  },
  {
    name: "Feb",
    order: 2
  },
  {
    name: "May",
    order: 5
  },{
    name: "Jun",
    order: 6
  },{
    name: "July",
    order: 7
  },{
    name: "Aug",
    order: 8
  },{
    name: "Sep",
    order: 9
  },{
    name: "Oct",
    order: 10
  },{
    name: "Nov",
    order: 11
  }
]

months.sort(function(a, b) {
  return a.order - b.order
});

console.log(months);

let arr = months.map(function(item) {
  return "Month Name is "+item.name;
});

console.log(arr);
