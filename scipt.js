let a=3;
let b=5;
let c="6";
let d="6";
console.log("addition of two number is:"+a+b);
console.log("substraction of two number is:"+a-b);
console.log(" of two number is:"+a*b);
console.log("addition of two number is:"+b/a);
console.log("addition of two number is:"+a+b);
console.log("addition of two number is:"+a+c+b);
console.log("addition of two number is:"+c+d);



let age=16;

if(age>=20)
{
    console.log("eligible")
}
else{
    console.log("not eligible")
}


let marks=87
if(marks>=90)
{
    console.log("grade A")
}
else if(marks>=80)
{
    console.log("grade B");
}
else if(marks>=70)
{
    console.log("grade C");
}
else if(marks>=60)
{
    console.log("grade D");
}
else if(marks==60)
{
    console.log("grade F");
}
else
{
    console.log("fail");
}

let Number=7
if(Number%2==0)
{
    console.log("even number")
}
else{
    console.log("odd number")
}

let y=100;
for(let i=1;i<=100;i++)
{
    if(y%i==0)
    {
        console.log("not prime number")
        break;
    }
    else{
        console.log("prime number")
    }
}

for(let i=20;i>=11;i--)
{
    console.log(i);
}


console.log("2.time complexity is more compare to optimal solution"); 
for(let i=1952;i<=2024;i++)
{
    if(i%4==0)
    {
        console.log(i);
    }
    
}

console.log("1.optimal solution for leap year");
let j=1999;
while(j<2025)
{
    if(j%4!=0)
    {
        j++;
    }
    else 
    {
        console.log(j);
        j+=4;
    }
}


    for(let i=1;i<=10;i++)
    {
        console.log(i);
    }

for(let i=10;i>=1;i--)
{
    console.log(i);
}   
for(let i=1;i<=10;i++)
{
    console.log(i);
    if(i==5)
    {
        break;
    }
}  
for(let i=1;i<=10;i++)
{
    
    if(i==5)
    {
        continue
    }
    console.log(i);
}  
let sum=0; 
for(let i=1;i<=10;i++)
{
     sum+=i;
     
}
console.log("sum of first 10 natural number is:"+sum);  

let x=100; 
for(let i=1;i<=10;i++)
{
     x-=i;
     
}
console.log("final value of x is:"+x);  

let factorial=1;
for(let i=1;i<=5;i++)
{
    factorial*=i;
}
console.log("factorial of 5 is:"+factorial);

let n=1234;
let reverse=0;

while(n>0)
{
    reverse=reverse*10+n%10;
    n=Math.floor(n/10);
}
console.log("reverse of 1234 is:"+reverse);


//fibonacci series
let a=0;
let b=1;
let next=0;

for(let i=0;i<=10;i++)
{
    console.log(a);
    next=a+b;
    a=b;
    b=next;
}

let sum=0;
let n=5;
for(let i=0;i<=n*2;i+=2 )
{
    sum+=i;
}
console.log("sum of first 10 numsber is:"+sum);

let sumodd=0;
for(let i=1;i<=n*2;i+=2 )
{
    sumodd+=i;
}
console.log("sum of first 10 numoddnumber is:"+sumodd);


let x=1243;
for(let i=2;i<=1000;i++)
{
    if(x%i==0)
    {
        if(i==x)
        {
            continue;
        }
        console.log(x+"--is not a prime")
        break;
    }
    else
    {
        console.log(x+"--is a prime number");
        
    }

}
