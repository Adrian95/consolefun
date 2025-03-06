import axios from "axios";
import readline from "node:readline/promises";
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();

// Create readline interface (works with await!)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask for the city
const city = await rl.question(chalk.blue("🌍 Enter a city name: "));
rl.close();

if (!city.trim()) {
  console.log(chalk.red("❌ Please enter a valid city."));
  process.exit(1);
}

// API key (replace this with your actual OpenWeatherMap API key)
const API_KEY = process.env.OPENWEATHERMAP_API_KEY;

if (!API_KEY) {
  console.error(chalk.red("❌ Missing API_KEY in .env file!"));
  process.exit(1);
}

const URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
  city
)}&units=metric&appid=${API_KEY}`;

try {
  const response = await axios.get(URL);
  const data = response.data;

  const temp = data.main.temp;
  const description = data.weather[0].description;
  const emoji = getWeatherEmoji(description);

  console.log(chalk.green(`\nWeather in ${chalk.bold(city)}:`));
  console.log(`🌡️ Temperature: ${chalk.yellow(temp + "°C")}`);
  console.log(`☁️ Description: ${chalk.cyan(description)} ${emoji}`);
} catch (error) {
  console.error(
    chalk.red("\n❌ Could not fetch weather:"),
    error.response?.data?.message || error.message
  );
}

// Emoji helper function
function getWeatherEmoji(description) {
  if (description.includes("cloud")) return "☁️";
  if (description.includes("rain")) return "🌧️";
  if (description.includes("clear")) return "☀️";
  if (description.includes("snow")) return "❄️";
  return "🌈";
}
