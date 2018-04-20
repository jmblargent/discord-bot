const Discord = require("discord.js");

const TOKEN = "NDM3MDA1MzQzNDMyNjM4NDY1.DbvweA.r1qktUgwBooIml12qK5gOO7MYjI";
const PREFIX = "Computer";

var bot = new Discord.Client();

bot.on("ready", function () {
    console.log("ready");
});
bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;
    if (!(message.content.startsWith(PREFIX) || message.content.startsWith(PREFIX.toLowerCase()))) return;
    var args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0].toLowerCase()) {
        default:
            message.channel.sendMessage("Beep Boop, I don't have that functionality, yet. Have you tried suggesting it in the bot suggestion channel?");
            break;
    }
});
bot.login(TOKEN);