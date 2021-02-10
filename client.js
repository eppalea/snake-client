const net = require('net');
let delayTime = 50;

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

  conn.on('connect', () => {  // callback function
    conn.write('Name: ELT'); // msg to send back to server 
  });  

  
  // conn.on('connect', () => {  // callback function
  //   setInterval(() => { // setTimeout or setInterval will repeat the move
  //     conn.write('Move: up'); // msg to send back to server 
  //   }, delayTime += 50); 
  //  }); 

  // conn.on('connect', () => {  // callback function
  //   conn.write('Move: up'); // msg to send back to server 
  // }); 

  return conn;
};

module.exports = { connect };