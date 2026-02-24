let num=[1,10,7,3];
num.sort((a, b) => a - b);//a-b sort numeric ascending 
                         //b-a sort numeric descending
num.push(4); //add at end
num.pop(); //remove at end
num.unshift(2); //add at start
num.shift();  //remove at start
num.map();
num.filter();

for(let i=0;i<num.length;i++)
{
    console.log(num[i]);
}

