const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL)

module.exports = ({ env }) => {
  console.log('=========')
  console.log(env('AWS_ACCESS_KEY_ID'), env('AWS_ACCESS_SECRET'), env('AWS_REGION'), env('AWS_BUCKET'))
  console.log('=========')

  return ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host: config.host,
          port: config.port,
          database: config.database,
          username: config.user,
          password: config.password,
        },
        options: {
          ssl: false
        }
      },
    },
  });
}
