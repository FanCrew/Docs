module.exports = {
  openapi: '3.0.0',
  host: 'https://docs.crustplay.com',
  info: {
    title: 'FanCrew - API',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'https://fantasy.crustplay.com',
      description: 'Development Server',
    },
  ],
  apis: [
    'Routes/*.js',
    'Models/*.js',
    'Controllers/*.js',
    'Services/*.js',
    'Docs/*.js',
  ],
};
