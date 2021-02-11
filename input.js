// Stores the active TCP connection onject.
let connection;

// Setup User Interface
// Specifically, so that we can handle user input via stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
    
  const handleUserInput = stdin.on('data', (key) => {
      // \u0003 maps to ctrl+c input
      if (key === '\u0003') {
        process.exit();
      }
      if (key === 'w') {
        conn.write('Move: up'); // msg to send back to server 
      }
      if (key === 'a') {
        conn.write('Move: left'); // msg to send back to server 
      }
      if (key === 's') {
        conn.write('Move: down'); // msg to send back to server 
      }
      if (key === 'd') {
        conn.write('Move: right'); // msg to send back to server 
      }
      if (key === 'b') {
        conn.write('Say: watch out'); // msg to send back to server 
      }
      if (key === 'n') {
        conn.write('Say: looking long'); // msg to send back to server 
      }
      if (key === 'm') {
        conn.write('Say: have a good day'); // msg to send back to server 
      }
    });
    return stdin;
  };

  module.exports = { setupInput };