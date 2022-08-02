// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

// Write your code below this line.

function findLuckyNumber(n){
    let possibleNumbers = [1,2,3,4,5,6,7,8,9,10]
    let luckyNumbers =[]
    for(let i =0 ; i < n ; i++){
        let x = Math.floor(Math.random() * possibleNumbers.length);
        luckyNumbers.push(possibleNumbers[x])
      possibleNumbers.splice(x,1)
    }
return luckyNumbers
}
console.log(findLuckyNumber(3))
// }
//  while(luckyNumbers.length < n){
//      let x = Math.floor(Math.random() * 10);
//      if (!luckyNumbers.includes (x)){
//          luckyNumbers.push(x);
//      }
//  }
//  return luckyNumbers(3)
