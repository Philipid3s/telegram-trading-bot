# Telegram Bot

This project is a Node.js-based Telegram bot for monitoring and alerting on new contracts.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Commands](#commands)
- [License](#license)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Philipid3s/telegram-trading-bot.git
   cd telegram-trading-bot
   ```
   
2. Install dependencies
   ```bash
   npm install
   ```

3. Create `config.js` file in the project root and add configuration details:
   ```javascript
   module.exports = {
    apiKey: 'YOUR_TELEGRAM_BOT_API_KEY',
    users: [
        { id: 123456789, name: 'User1', alert: true },
        { id: 987654321, name: 'User2', alert: true }
    ]
    };
   ```

## Usage

### Running the Telegram Bot

To start the bot, run:

   ```bash
   npm start
   ```

## Configuration

### `config.js`

This file should export an object containing your Telegram bot API key and an array of user objects with their details:

```javascript
module.exports = {
    apiKey: 'YOUR_TELEGRAM_BOT_API_KEY',
    users: [
        { id: 123456789, name: 'User1', alert: true },
        { id: 987654321, name: 'User2', alert: true }
    ]
};
```

- apiKey: Your Telegram bot API key.
- users: Array of user objects, each containing:
    - id: The Telegram user ID.
    - name: The user's name.
    - alert: Boolean indicating if the user should receive alerts.

## Commands

### /start
Starts interaction with the bot and sends a welcome message if the user is authenticated.

### /status
[DUMMY COMMAND] Fetches the status of contracts and sends a summary to the user if authenticated.