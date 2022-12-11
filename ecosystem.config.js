const env = process.env.NODE_ENV || 'dev';

module.exports = {
  apps: [
    {
      name: `openAIBot-${env}`,
      script: 'index.js',
      watch: '.',
      ignore_watch: ['node_modules'],
    },
  ],
};
