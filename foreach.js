// //foreach
// let num=[13,4,6,4,2];

// num.forEach(n=>console.log(n));

// //map
// let cube=num.map(n=>n*n*n);
// console.log(cube);

// //filter
// let even=num.filter(n=>n%2==0)
// console.log(even)

// //find
// let greaterele=num.find(n=>n>=3)
// console.log(greaterele)

//splice
let newarr=[3,65,32,76]
let result=newarr.splice(1,2,3,444);//index 1,2 in the arr delete and the 3,444 added
console.log(newarr);

//sort
let sorti_arr=newarr.sort((a,b)=>a-b);
console.log("sorted arr:",newarr);

//reduce
let sum=newarr.reduce((a,b)=>a+b , 0);
console.log(sum);




