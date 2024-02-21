const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama anda : ", (name) => {
  console.log(`Halo ${name}, Selamat datang.`);
  rl.close();
});

rl.on("close", () => {
  process.exit(0);
});
