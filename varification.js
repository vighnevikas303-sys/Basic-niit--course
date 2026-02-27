const prompt = require("prompt-sync")();


let count = 3;
let password = "1vikas8";
// if(password.length!=y.length)
// {
//     console.log("enter currect password.....");
// }
// for(let i=1;i<=3;i++)
// {

//         if(password.charAt(i)!=y.charAt(i))
//     {
//         count--;

//     }  

// }
//             if(count==3)
// {
//     console.log("try again after 10");

// }
for (let i = 0; i <= password.length; i++) {
    let y = prompt("enter password :");
    if (password === y) {
        console.log("login Successfully!");
        break;

    }
    else {
        console.log("wrong password.....");

        if (i===3) {
            console.log("try after 15 seconds......")
            let seconds = 15;

            let timer = setInterval(() => {
                console.log("try again in", seconds, "second");
                seconds--;

                if (seconds < 0) {
                    clearInterval(timer);
                    console.log("you can try again now")
                }
            }, 1000);
        } else {
            console.log("attempt left:", 3 - i);
        }

    }


}

