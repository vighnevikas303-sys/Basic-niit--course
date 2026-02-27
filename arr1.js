// let cart=["apple","orange","banana"];
// console.log("my cart:",cart);
 const prompt=require("prompt-sync")();
 let y=prompt("enter number of value:");
y=parseInt(y);

// console.log("1.add element")
// console.log("2.delete the element")
// console.log("3.store element")


// switch(userInput)
// {
//     case "1":
//         let additem= prompt("choose the item:");
//         cart.push(additem);
//           console.log("added successfully:"+cart)
//     break;

//         case "2":
//         let deleteitem= prompt("choose the item:");
//         cart.pop(deleteitem);
//         console.log("deleted successfully:"+cart)
//     break;
//     default:console.log("existing.....");


    
// }
// console.log(userInput);


let arr=[1,23,4];
for(let i=0;i<arr.length;i++)
{
    if(y%2==0)
    {
        arr.push(y);
        console.log("yes your element added succesfully:",arr);
        break;
    }
    else{
        console.log("you enter the odd number!.....")
        break;
    }
}

