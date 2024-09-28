module.exports = {
  apps: [
    {
      name: 'nest-app',
      script: 'dist/main.js',
      instances: 4,
      exec_mode: 'cluster',
      watch: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
