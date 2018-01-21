var ammo = require("bitcoin");

var client = new ammo.Client({
  host: 'localhost',
  port: 8833,
  user: 'Ammorpc',
  pass: 'C7uAfLAwx4nv5qCQ7oHefTxCBfotFMueaAEqXieZad1g',
  timeout: 30000
});

client.getBalance('*', 0, (err, balance, resHeaders) => {
  if (err) return console.log(err);
  console.log('Balance:', balance);
})

client.getBlockCount((err, block, resHeaders) => {
  if (err) return console.log(err);
  console.log('BlockCount:', block);
})