//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

function evenIndex(arr){

for (let i = 0; i<arr.length; i++){
    if (i % 2 == 0){
        arr.splice(i, 1, "even index")
    }
    
}
console.log(arr)
};

let returned_value = evenIndex(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]);


