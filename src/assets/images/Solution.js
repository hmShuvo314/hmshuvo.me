// const fs = require('fs');
// const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let currentline = 0;
function readline() {
  return input[currentline++];
}

const solve = (arr, forb, p) => {
  const maxes = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < p; j++) {
      maxes[i][arr[i][j]] = maxes[i][arr[j]] + 1 || 1;
    }
  }
};

let T = readline();
for (let i = 1; i <= T; i++) {
  let [n, m, p] = readline().split(" ");
  const arr = [];
  const forbidden = {};
  for (let i = 0; i < n; i++) {
    arr.push(readline());
  }
  for (let i = 0; i < m; i++) {
    forbidden[readline()] = true;
  }
  console.log(`Case #${i}: ${solve(arr, fobidden, p)}`);
}

solve(["1100", "1010", "0000"], { 1000: true }, 4);
