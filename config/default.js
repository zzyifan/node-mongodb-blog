module.exports = {
  port: 3000,
  session: {
    secret: 'Ablog',
    key: 'Ablog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/Ablog'
};