const net = require('net');
const { IP, PORT } = require('./constants');

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('data', (data) => { // event handler to handle incoming data
    console.log('Server says: ', data); // outputs the data to the client (player in this case)
  });

  conn.on('connect', () => {  // callback function
    conn.write('Name: ELT'); // msg to send back to server 
  });  

  return conn; //returning the object conn, which is the connection
};

module.exports = { connect };