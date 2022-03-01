const { Client } = require('pg')

const client = new Client({
    host: "localhost",
    user: "kuro",
    port: 5000,
    password: "surveyApp",
    database: "postgres"
})

client.connect(
    err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
});

client.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      async function myFunc() {
        return "Hello";
      }
    }
//    client.end();
  })
