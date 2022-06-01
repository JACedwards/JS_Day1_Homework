//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/


function dogCheck(dog_string, dog_names){

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
}

let returned_value = dogCheck("Hello Max, my name is Dog, and I have purple eyes!", ["Max","HAS","PuRple","dog"]);

