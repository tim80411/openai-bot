const { Client, GatewayIntentBits } = require('discord.js');
const { Configuration, OpenAIApi } = require('openai');
const dotenv = require('dotenv');
const _ = require('lodash');

const logger = require('./lib/Logger');

// config
dotenv.config();
const { BOT_TOKEN, OPENAI_TOKEN } = process.env;
const config = new Configuration({
  apiKey: OPENAI_TOKEN,
});

const openai = new OpenAIApi(config);

// 创建 Discord Client 实例
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.on('ready', () => {
  logger.debug({ msg: 'Bot is ready!' });
});

client.on('messageCreate', async (message) => {
  logger.debug({ nsg: 'got message', message });
  if (message.member.user.bot) return;

  const firstSplitWord = _.chain(message.content).split(' ').first().value();
  const isCommand = _.startsWith(firstSplitWord, '-');

  if (message.content === 'ping') {
    message.channel.send('https://tenor.com/view/pong-gif-26462133');
  }

  // command
  if (!isCommand) return;
  const trimFirstSplitWord = _.trimStart(firstSplitWord, '-');
  if (trimFirstSplitWord === 'talk') {
    message.channel.send('talk back ok');
  }

  if (trimFirstSplitWord === 'ai') {
    const input = _.chain(message.content).split(' ').last().value();
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: input,
      temperature: 0.9,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: ['AI', 'HUMAN'],
    });

    const response = _.get(completion, 'data.choices.0.text');
    message.channel.send(response);
  }
});

client.login(BOT_TOKEN);
