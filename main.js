//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

for (let i=0; i<dog_names.length; i++){
    let x = dog_string.includes(dog_names[i]);
    if (x == true){
        console.log('Matched dog name');
        break;
        }
    if (x != true){
        console.log('No Matches')
    }
}


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

for (let i = 0; i<arr.length; i++){
    if (i % 2 == 0){
        arr.splice(i, 1, "even index")
    }
};
console.log(arr)

//====================Code Wars #1======================== 

// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you create a function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

let animal = 'fox'
let last_letter = '0'

if(animal.slice(-1) == last_letter){
    console.log(true)
};

if(animal.slice(-1) != last_letter){
    console.log(false)
};

// =================Code Wars #2====================

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly differently with "Hello, my love." She should greet everyone else with just "Hello".

let greeted = "Goober"

if(greeted == "Johnny"){
    console.log("Hello, my love")
};

if(greeted != "Johnny"){
    console.log("Hello")
};

