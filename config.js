module.exports = {
  openapi: '3.0.0',
  host: 'https://fantasy.crustplay.com',
  info: {
    title: 'FanCrew - API',
    version: '1.0.0'
  },
  apis: ['Routes/*.js', 'Models/*.js', 'Controllers/*.js', 'Services/*.js']
};