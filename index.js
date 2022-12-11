const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

const logger = require('./lib/Logger');

dotenv.config();

const { BOT_TOKEN } = process.env;

// 创建 Discord Client 实例
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});
// 当客户端准备就绪时，输出 "Bot is ready!"
client.on('ready', () => {
  logger.debug({ msg: 'Bot is ready!' });
});

// 当接收到新消息时，检查消息内容是否为 "ping"，如果是，则向消息发送者回复 "pong"
client.on('messageCreate', (message) => {
  logger.debug({ nsg: 'got message', message });
  if (message.content === 'ping') {
    message.channel.send('https://tenor.com/view/pong-gif-26462133');
  }
});

// 登录 Discord 服务器，开始接收和处理消息
client.login(BOT_TOKEN);
