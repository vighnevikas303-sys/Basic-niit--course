let x=25;

let count=1;
// let y=11;
 const prompt=require("prompt-sync")();
 let y=prompt("enter number of value:");
y=parseInt(y);

while(count<=y)
{
    x=x+count*count;
      if(x%5!=0)
     {
        console.log(x);
     }
     else{
        count++;
        continue;
        
     }

      if(count==y)
    {
        break;
    }
    count++;
}