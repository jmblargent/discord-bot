const Discord = require("discord.js");
const js = require("jsearch");
const request = require("request");
const fs = require('fs');

const config = require("./config.json")
const PREFIX = config.prefix;

var bot = new Discord.Client();

bot.on("ready", function () {
    console.log("ready");
});
bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;
    if (!(message.content.startsWith(config.prefix) || message.content.startsWith(config.prefix.toLowerCase()))) return;
    var args = message.content.substring(PREFIX.length).split(" ");
    switch (args[1].toLowerCase()) {
        case "wrongchat":
            console.log("moving messages");
            var numberOfMessages = args[2];
            var newChannel = args[3];
            wrongChat(numberOfMessages, message, newChannel);
            break;
        default:
            console.log(args[1]);
            message.channel.sendMessage("Beep Boop, I don't have that functionality, yet. Have you tried suggesting it in the bot suggestion channel?");
            break;
    }
});

bot.login(config.token);

var wrongChat = function (numMessages, message, channel) {
    console.log("Moving " + numMessages + " to " + channel);
    numMessages = Number(numMessages) + 1;
    console.log(numMessages);
    message.channel.fetchMessages({ limit: numMessages })
        .then(messages => {
            let messagesArr = messages.array();
            let messageCount = messagesArr.length;
            for (let i = messageCount-1; i >= 1; i--) {
                //console.log(messagesArr[i]);
                bot.channels.find("name", channel).send(messagesArr[i].content);
                messagesArr[i].delete();
            }
        })
        .catch(console.error);
}
    