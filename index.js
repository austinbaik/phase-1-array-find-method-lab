// code your solution here



// Write a fnction called superbowlWin() in index.js:

// The function should receive 1 argument, an Array of JavaScript Objects
// Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return, sadly, undefined


const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]


// function superbowlWin(Array) {
//   Array.find((content) => {
//     if (content.result === 'W'){
//       return content.year;
//     }
//   })

// }


// const newArray = record.find(superbowlWin).year;

// function superbowlWin(record) {
//   return record.result === 'W';
// }

// console.log(newArray);



function superbowlWin(games) {
  let winsArray = games.find(game => game.result === "W") 
    if (winsArray) {
      return winsArray.year
    }   else {
      return undefined;
    }
}
  
console.log(winsArray);