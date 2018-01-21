var ammo = require("bitcoin");
var express = require("express");
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies

var client = new ammo.Client({
  host: 'localhost',
  port: 8833,
  user: 'Ammorpc',
  pass: 'C7uAfLAwx4nv5qCQ7oHefTxCBfotFMueaAEqXieZad1g',
  timeout: 30000
});

app.post('/getBalance/:address', function (req, res) {
  //var address = req.body.address;
  var address = req.params.address;
  if (address) {
    res.send("Balance for " + address + ": " + "0.150 AMMO");
  } else {
    res.send("Address is missing");
  }
});

app.listen(3001, function () {
  console.log("Example app listening on port 3001!");
})

client.getBalance('*', 0, (err, balance, resHeaders) => {
  if (err) return console.log(err);
  console.log('Balance:', balance);
})

client.getBlockCount((err, block, resHeaders) => {
  if (err) return console.log(err);
  console.log('BlockCount:', block);
})