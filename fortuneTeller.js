import Groq from "groq-sdk";
import dotenv from "dotenv";
import chalk from "chalk"; // For adding color to terminal text
import figlet from "figlet"; // For creating ASCII art headers

dotenv.config();

const groq = new Groq();

export async function main() {
  console.clear(); // Clear the terminal to keep things fresh

  // Display a big, fun header in ASCII art
  console.log(
    chalk.magenta(figlet.textSync("Groq Fortune", { horizontalLayout: "full" }))
  );

  const chatCompletion = await getGroqChatCompletion();

  // Grab the fortune text or a fallback message
  const fortune =
    chatCompletion.choices[0]?.message?.content || "Oops, no fortune today! 😞";

  // Fun fortune printout with colors and formatting
  console.log("\n✨ Your Fortune ✨\n");
  console.log(chalk.cyanBright.bold(`"${fortune}"`));
  console.log("\n🔮 May your terminal always bring good vibes. 🔮\n");
}

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content:
          "give me a one sentence fortune. your printing to a terminal. make it fun to look at.",
      },
    ],
    model: "deepseek-r1-distill-llama-70b",
    reasoning_format: "hidden",
  });
}

main();
