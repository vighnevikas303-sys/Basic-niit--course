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

let n=100;
for(let i=1;i<=100;i++)
{
    if(n%i==0)
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