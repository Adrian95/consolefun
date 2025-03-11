# consolefun

## Overview

`consolefun` is a collection of fun and interactive console-based tools written in JavaScript. These tools are designed to bring some joy and utility to your terminal experience. The project includes the following tools:

1. **Fortune Teller**: Ask a question and receive a fortune in haiku format with colorful display.
2. **Weather Checker**: Fetch and display the current weather for a specified city.
3. **Countdown Timer**: A countdown timer with colorful output and a blast-off animation.

## Tools

### Fortune Teller

The Fortune Teller tool prompts you for a question, uses the Groq API to generate a personalized fortune in haiku format based on your question, and displays the response with colorful ASCII art and emoji.

#### Usage

```sh
node fortuneTeller.js
```

You will be prompted to enter your question, then the application will generate a fortune in haiku format based on your input.

### Weather Checker

The Weather Checker tool fetches the current weather for a specified city using the OpenWeatherMap API and displays it with colorful output.

#### Usage

```sh
node weather.js
```

### Countdown Timer

The Countdown Timer tool counts down from a specified number and displays each number in a random color. When the countdown reaches zero, it displays a blast-off animation.

#### Usage

```sh
node countdown.js <number>
```

## Setup

1. Clone the repository.
2. Install the dependencies:

```sh
npm install
```

3. Create a `.env` file in the root directory and add your API keys:

```
OPENWEATHERMAP_API_KEY="your_openweathermap_api_key"
GROQ_API_KEY="your_groq_api_key"
```

## Dependencies

- `axios`: For making HTTP requests.
- `chalk`: For adding color to terminal text.
- `dotenv`: For loading environment variables from a `.env` file.
- `figlet`: For creating ASCII art headers.
- `groq-sdk`: For interacting with the Groq API.
