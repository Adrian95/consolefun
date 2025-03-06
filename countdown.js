// countdown.js
import chalk from "chalk";

// Define some fun colors to pick from
const colors = [
  chalk.red,
  chalk.green,
  chalk.blue,
  chalk.yellow,
  chalk.magenta,
  chalk.cyan,
  chalk.white,
];

const randomColor = colors[Math.floor(Math.random() * colors.length)];

// Step 1: Read number from command line
const args = process.argv.slice(2);
const countdownNumber = parseInt(args[0], 10);

if (isNaN(countdownNumber) || countdownNumber <= 0) {
  console.log(
    "❌ Please provide a valid positive number, e.g.: node countdown.js 10"
  );
  process.exit(1);
}

// Step 2: Countdown logic
let currentNumber = countdownNumber;

const timer = setInterval(() => {
  if (currentNumber === 0) {
    console.log("🚀 Blast off!");
    console.log(`
        🎇✨🎆✨🎇
      🎆✨🎇✨🎆
        🎇✨🎆✨🎇
   `);

    clearInterval(timer);
    return;
  }
  console.log(randomColor(currentNumber));
  currentNumber--;
}, 1000); // every second
