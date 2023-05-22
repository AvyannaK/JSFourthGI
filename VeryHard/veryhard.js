// *VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Note: You may assume that you have an infinite number of each kind of coin.

// const coins1 = [1, 2, 5];
// const amount1 = 11;
// output needs to be 3

const coins2 = [2];
const amount2 = 3;
// output needs to be -1


function fewestCoins(x,y){
    //we make a variable to hold the total amount of coins
    let totalcoins = 0;
    // here we check if y (the target) is more than 0
    //if it is we loop through the array
    if(y > 0){
        //inside the loop we start from the right of our array of coins
        let i = x.length - 1;
        while(i >= 0 && i < x.length){
            //we check if the coin we are on in the array will subtract from the target and have a remainder (greater than 0)
            // if so we subtract it and add one to the total coins
            // if the coin is too big and goes past 0 we increment backwards in our array to go to a smaller coin
            if(y - x[i] >= 0){
                y = y - x[i];
                totalcoins++
                // console.log(y)
                // console.log(totalcoins)
            } else {
                i--;
            }
        }
        if(y === 0){
            return totalcoins;
        } else {
            return -1;
        }
        
    }
}

// console.log(fewestCoins(coins1,amount1));
console.log(fewestCoins(coins2,amount2));