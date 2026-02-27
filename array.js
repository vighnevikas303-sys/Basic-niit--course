let num=[1,10,7,3];
console.log("original array:["+num+"]")

num.sort((a, b) => a - b);//a-b sort numeric ascending 
console.log("sorting of arr:",num)      //b-a sort numeric descending

num.push(4); //add at end
console.log("if push at end:",num)

num.pop(); //remove at end
console.log("if pop at end:["+num+"]")

num.unshift(2); //add at start
console.log("if add at start:["+num+"]")

num.shift();  //remove at start
console.log("delete from start:["+num+"]")
// num.filter();

 num.reverse();
 console.log("reverse the array: ["+num+"]")

 num.map(num=>num*num);
 console.log("using map double is: ["+num+"]")

 num.slice()
 console.log("using slice:["+num+"]")

 num.splice()
  console.log("using splice:["+num+"]")
 
  let x=num.indexOf(10);
   console.log("index of number 10 is :"+x)

   

