import Groq from "groq-sdk";
import dotenv from "dotenv";
import chalk from "chalk"; // For adding color to terminal text
import figlet from "figlet"; // For creating ASCII art headers
import readline from "readline"; // For reading input from the command line

dotenv.config();

const groq = new Groq();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export async function main() {
  console.clear(); // Clear the terminal to keep things fresh

  // Display a big, fun header in ASCII art
  console.log(
    chalk.magenta(figlet.textSync("Groq Fortune", { horizontalLayout: "full" }))
  );

  rl.question("What would you like to ask ? ", async (input) => {
    const chatCompletion = await getGroqChatCompletion(input);

    // Grab the fortune text or a fallback message
    const fortune =
      chatCompletion.choices[0]?.message?.content ||
      "Oops, no fortune today! 😞";

    // Fun fortune printout with colors and formatting
    console.log("\n✨ Your Response ✨\n");
    console.log(chalk.cyanBright.bold(`"${fortune}"`));
    console.log("\n🔮 May your terminal always bring good vibes. 🔮\n");

    rl.close();
  });
}

export async function getGroqChatCompletion(content) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Give me a haiku fortune, based on this question. Be like a greek oracle: ${content}`,
      },
    ],
    model: "qwen-2.5-32b",
  });
}

main();
