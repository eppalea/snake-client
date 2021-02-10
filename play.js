const net = require('net');

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('data', (data) => { // event handler to handle incoming data
    console.log('Server says: ', data); // outputs the data to the client (player in this case)
  });

  return conn;
};

console.log('Connecting ...');
connect();