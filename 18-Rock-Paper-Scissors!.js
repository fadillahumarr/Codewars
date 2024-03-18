//Day 5/366

//https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

const rps = (p1, p2) => {
  return (p1 === "scissors" && p2 === "paper") ||
  (p1 === "rock" && p2 === "scissors") ||
  (p1 === "paper" && p2 === "rock")
    ? "Player 1 won!"
    : p1 === p2
    ? "Draw!"
    : "Player 2 won!";
};

// const rps = (p1, p2) => {
//   if (
//     (p1 === "scissors" && p2 === "paper") ||
//     (p1 === "rock" && p2 === "scissors") ||
//     (p1 === "paper" && p2 === "rock")
//   ) {
//     return "Player 1 won!";
//   } else if (p1 === p2) {
//     return "Draw!";
//   } else {
//     return "Player 2 won!";
//   }
// };

console.log(rps("rock", "scissors"));
console.log(rps("scissors", "paper"));
console.log(rps("paper", "rock"));
