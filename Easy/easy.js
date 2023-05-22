// Write a function that takes in an array of numbers and outputs the average of all the numbers. //

// Create an array//
const Garray = [14, 14, 7];

// Create a function//
function findAvg(arr){
    let arrtotal = 0;
    // the for loop below calculates the sum of all the numbers in the array
    // it does this by looping through the array and at each index 
    // then adds the value to the arrtotal variable
    for (i = 0; i < arr.length; i++) {
        arrtotal = arrtotal + arr[i];
        // console.log(arrtotal)
    }
    // here we return the avg by returning the total (arrtotal) divided by the number of items in the array (arr.length)//
    return arrtotal/arr.length
}

//console.log to see average in terminal //
console.log(findAvg(Garray))