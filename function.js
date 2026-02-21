let c=prompt("enter the number:");
function square( c)
{
 return  c*c;
   
}
let y=square(c);
console.log(y);

 
const greet=function(name){ // expression function
    console.log("hello",name);;
}

greet("amol");

const multiply=(a,b)=>//arrow function
    a*b;
    console.log("multiplication is :",multiply(1,2));

    function welcome(name="guest"){
        console.log("welcome",name);
    }
    welcome();
    welcome("bob");
    

 function login(username,password)
 {
    if(username=="admin" && password=="password")
    {
        console.log("login successful");
        
    }
    else{
        console.log("login failde");
    }
 }
 login("admin","password");
 login("user","1234")
 login("password","1234");
 
//  fallback function is a fuc that is pass an argument another function is executed task is compiled 
//  fallback used to execution time 
//  some task take time like 
//  we want to perform a task after tasks completely   document file->open


 function greet(name,callback)
 {
    console.log("hello",name);
    callback();
 }

 function  saybye(){
    console.log("good night!");//in last call greet passing parameters alice and second one is the fnc pass the callback ;
 }
 greet("alice",saybye)

 function orderfood(item,callback)
 {
    console.log("order placed for:",item);
    setTimeout(()=>{
        
        callback();
    },12000);
}

    orderfood("pizza",function(){
        console.log("food is ready!");
    });


const prompt=require("prompt-sync")();
// console.log("this is only for authorization please enter your name:")
let age=prompt("enter your age:");


 function jobready(age)
 {
    if(age>=18 && age<=60)
    {
        console.log("your eligible for job")
    }
    else if(age<=18){
        console.log("go home now your child!")
    }
    else{
        console.log(" sir its to time retired go home and rest !")
    }
   
 }
 
jobready(age);
 
