var bitcoin = require("bitcoinjs-lib");
var args = process.argv;
console.log(args[2]);
var privKey = args[2];
var keyPair = bitcoin.ECPair.fromWIF(privKey, bitcoin.networks.testnet);
//var keyPair = bitcoin.ECPair.fromWIF(privKey, bitcoin.networks.mainnet);
//console.log(keyPair)
//var keyPair = bitcoin.ECPair.fromWIF("5Kb8kLf9zgWQnogidDA76MzPL6TsZZY36hWXMssSzNydYXYB9KF", bitcoin.networks.mainnet);
console.log(keyPair.getAddress())
console.log(keyPair.getPublicKeyBuffer().toString('hex'))
