//tribonacci series
let a=0;
let b=1;
let c=1;


console.log(a);
console.log(b);
console.log(c);
for(let i=2;i<=10;i++)
{
 
   let next=a+b+c;
    console.log(next);
    a=b;
    b=c;
    c=next;
    
}