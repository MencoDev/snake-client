const { connect } = require('./client');

const { setupInput } = require('./inputs');

console.log("Connecting from play ...");
setupInput(connect());

//setupInput(connect());


// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   return stdin;
// };