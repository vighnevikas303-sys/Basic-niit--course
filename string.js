let name=" vikas ";
let a=name.length;
console.log(`length : ${a}`);


console.log(name.toUpperCase());


console.log(name.toLowerCase());

console.log(name.trim());

//slice()
console.log(name.slice(1,5));//print index 0 to 4

//replace
console.log("hello ".replace("my world"));

//split
let data ="apple ,banana,orange";//convert string to arr string
console.log(data.split(","));

console.log("akansha".charAt(0));

//startwith() endswith()
console.log("javascript".startsWith("java"));
console.log("javascript".endsWith("java"));


//concat()
let str1="Hello";
let str2="madhav";
console.log(str1.concat(" ",str2));//add two string
console.log(str1+" "+str2);
console.log(`${str1} ${str2}`);

//escape characters
console.log("i said, \"hello world\"")
console.log(`hello \nWorld!`);
console.log('Hello \tworld');

//compare
let a1="aamba";
let a2="aambe";
console.log(a1==a2);