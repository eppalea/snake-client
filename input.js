// Setup User Interface
// Specifically, so that we can handle user input via stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
    
  const handleUserInput = stdin.on('data', (key) => {
      // \u0003 maps to ctrl+c input
      if (key === '\u0003') {
        process.exit();
      }
    });
    
    return stdin;
  };

  module.exports = { setupInput };