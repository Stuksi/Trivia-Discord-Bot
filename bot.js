const Discord = require('discord.js');
const client = new Discord.Client();

let isActive = false;
let users = new Map();

let question = 'What sport is Cristiano Ronaldo associated with?';
let answer = 'Football';

let usersIterator = users.keys();

client.login('ODA0MzUyMDA0MDE3MDk0Njk2.YBLFLQ.-0p3Nb7seOKJU3v79zGjkJs3xmQ');

client.on('ready', readyDiscord);
client.on('message', readMessage);

function readyDiscord() {
    console.log("---------- Trivia On ----------");
}

function readMessage(msg) {
    if (msg.channel.id == '806092124256337942') {
        if (msg.content === '!trivia' && !isActive) {
            msg.reply(' activated Trivia! Join to play! :star_struck:');
            isActive = true;
        } else if (isActive) {
            if (msg.content === '!trivia') {
                msg.channel.send('Trivia allready active! Join to play!');
            } else if (msg.content === '!join') {
                if (users.has(msg.author.id)) {
                    msg.reply(' you have allready joined!');
                    return;
                }
                users[msg.author.id] = 0;
                msg.reply(', joined the Trivia!');
            } else if (msg.content === '!next') {
                msg.channel.send('@' + usersIterator.next().value + ' ,' + question);
            } else if (msg.content === '!a)') {

            } else if (msg.content === '!b)') {

            } else if (msg.content === '!c)') {

            } else if (msg.content === '!d)') {

            }
        }
    }
}