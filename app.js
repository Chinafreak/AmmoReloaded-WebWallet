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

app.post('/getbalance/:address', function (req, res) {
  var address = req.params.address;
  if (address) {
    client.listUnspent(address, 0, (err, balance, resHeaders) => {
      if (err) return res.send(err);
      res.send("Balance for " + address + ": " + balance + " AMMO");
    })

  } else {
    res.send("Address is missing");
  }
});

app.listen(3001, function () {
  console.log("Example app listening on port 3001!");
})



client.getBlockCount((err, block, resHeaders) => {
  if (err) return console.log(err);
  console.log('BlockCount:', block);
})