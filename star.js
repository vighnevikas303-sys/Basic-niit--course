
// for(let i=1;i<=5;i++)
// {  
//     console.log("*");
// }

// for(let i=1;i<=5;i++)
// {  
//     console.log("**");
// }

// for(let i=1;i<=5;i++)
// {
//     let row="";
//     for(let j=1;j<=5;j++)
//     {
//         row+="*";
//     }
//     console.log(row);
// }
// for(let i=1;i<=5;i++)
// {
//     let row="";
//     for(let j=1;j<=i;j++)
//     {
//         row+="*";
//     }
//     console.log(row);
// }

// for(let i=5;i>=1;i--)
// {
//     let row="";
    
//     for(let j=1;j<=i;j++)
//     {
//         row+="*";
//     }
//     console.log(row);
// }

 
// for(let i=1;i<=5;i++)
// {
//     let row="";
//     console.log("*")
    
//     for(let j=1;j<=i;j++)
//     {
//         row+="*";
//     }
//     console.log(row);
// }

 
// for(let i=1;i<=5;i++)
// {
//     let row="";
//     console.log("*")
    
//     for(let j=1;j<=i;j++)
//     {
//         let space=" ";
//         row+="*";
//     }
//     console.log(row);
// }

let n=5;

// for(let i=1;i<=n;i++)
//  {
//     let row="";

//     for(let k=1;k<=n-i;k++)
//     {
//         row+=" ";
//     }
//     for(let j=1;j<=i;j++)
//     {
         
//         row+="* ";
//     }
//     console.log(row);
// }

for(let i=n;i>=1;i--)
 {
    let row="";

    for(let k=n-i;k>=1;k--)
    {
        row+=" ";
    }
    for(let j=i;j>=1;j--)
    {
         
        row+="* ";
    }
    console.log(row);
}