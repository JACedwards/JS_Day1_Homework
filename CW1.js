// =================Code Wars #2====================

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly differently with "Hello, my love." She should greet everyone else with just "Hello".


function helloJenny(name){
    if(name == "Johnny"){
        console.log("Hello, my love.")
    };
    
    if(name != "Johnny"){
        console.log("Hello.")
    };
}

let returned_value =  helloJenny("Johnny")