const config = require('./config');
const checkContract = require('./alertContracts');
const botgram = require("botgram");
const axios = require("axios");

const bot = botgram(config.apiKey);

const isAuthenticated = (from) => {
    return config.users.some(user => user.id === from.id);
}

function alerts() {
    setInterval(checkContract, 3600000);
}

bot.on("ready", () => {
    console.log("Authenticated...");
    alerts();
});

bot.on("error", (err) => {
    console.error("Bot encountered an error:", err);
});

bot.command("start", "help", (msg, reply) => {
    console.log(`Received a /start command from ${msg.from.name} (${msg.from.id})`);

    if (!isAuthenticated(msg.from)) {
        reply.text(`You are not an authenticated user. Please contact your admin (ID: ${msg.from.id}).`);
    } else {
        reply.text(`Hi ${msg.from.firstname}, I'm your Crypto Trading Bot.`);
    }
});

bot.command("status", async (msg, reply) => {
    console.log(`Received a /status command from ${msg.from.name} (${msg.from.id})`);

    if (!isAuthenticated(msg.from)) {
        reply.text('You are not authorized to use this command.');
        return;
    }

    try {
        const response = await axios.get('http://0.0.0.0/api');

        const { var1, var2, var3 } = response.data;

        const statusResponse = `Status:
                        text1: ${var1}
                        text2: ${var2}
                        text3: ${var3}`;

        reply.text(statusResponse);
    } catch (error) {
        console.error('Error fetching status:', error);
        reply.text('Internal Error');
    }
});

bot.command((msg, reply) => {
    reply.text("Invalid command.");
});
