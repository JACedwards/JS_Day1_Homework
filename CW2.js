
//====================Code Wars #1======================== 

// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you create a function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.


let animal = 'fox'
let last_letter = '0'

function animalTail(animal, last_letter){

if(animal.slice(-1) == last_letter){
    console.log(true)
};

if(animal.slice(-1) != last_letter){
    console.log(false)
}
};

let returned_value = animalTail("Fox", "o")
