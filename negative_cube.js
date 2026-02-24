let x=500;
 const prompt=require("prompt-sync")();
 let n=prompt("enter number of value:");
n=parseInt(n);
for(let i=1;i<=n;i++)
{
    console.log(x);
    x-=(i*i*i);

}