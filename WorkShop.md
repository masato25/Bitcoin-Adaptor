```
# generate block
bitcoin-cli -datadir=/data/node-pool generate 101
# getbalance
bitcoin-cli -datadir=/data/node-pool getbalance


bitcoin-cli -datadir=/data/node-alice getnewaddress a
2Mvg1zmGEcz5U3cqfdnSFCBjrw3A7KyxfZ8
bitcoin-cli -datadir=/data/node-bob getnewaddress b
2NEwZTixtGzX4feQgqMiiQKEWcY3vA1cbwN
bitcoin-cli -datadir=/data/node-pool getnewaddress p
2NC7SG23QWVeJxkQ2kzMFQSuVUK8F6X4d6X

bitcoin-cli -datadir=/data/node-alice dumpprivkey 2Mvg1zmGEcz5U3cqfdnSFCBjrw3A7KyxfZ8
=> cQ8Q63DbZSLkoBvF8w2nrwgefyXoxH6YUnPf7WSQyyQag2Zbruz5
bitcoin-cli -datadir=/data/node-bob dumpprivkey 2NEwZTixtGzX4feQgqMiiQKEWcY3vA1cbwN
=> cUrPxyWWSAZQ9m1VkcjWwKJHueFRtRBMstCNCnTr6vsU8KTfWdCf
bitcoin-cli -datadir=/data/node-pool dumpprivkey 2NC7SG23QWVeJxkQ2kzMFQSuVUK8F6X4d6X
=> cSUuEksjQKDWyCf9SJxiVfM7vdzEAJn7zKvURTBkH8iqZPkt26aj

-> get public from private key (test network)
=> node main.js cR3hU7bMWTwTLkBuktoqkam6SSz2XyDEr6ExxGkvGjeNP4YA7P8s

* 026f6576be61034181f4c36effb8b8f9f9595f8a6f5faeb683eec8a26aa7dba66d
* 02b4fee792200552726a66eff265d4f8210e56216492efbdc902e828874a1bd29f
* 02f991d93c0d429436197ef8e46b53c5b27e13a0bc3acb67226bd1753127201e69

bitcoin-cli -datadir=/data/node-alice importprivkey "cSKNG9MP5f1ZYGKLZeK8wLYhWfzTsPHiFXrsaNj11MQf2gF7ot6N" "a" rescan=false
bitcoin-cli -datadir=/data/node-bob importprivkey cR3hU7bMWTwTLkBuktoqkam6SSz2XyDEr6ExxGkvGjeNP4YA7P8s "b" rescan=false
bitcoin-cli -datadir=/data/node-pool importprivkey cSUuEksjQKDWyCf9SJxiVfM7vdzEAJn7zKvURTBkH8iqZPkt26aj "p" rescan=false



bitcoin-cli createmultisig 2 '["026f6576be61034181f4c36effb8b8f9f9595f8a6f5faeb683eec8a26aa7dba66d", "02b4fee792200552726a66eff265d4f8210e56216492efbdc902e828874a1bd29f", "02f991d93c0d429436197ef8e46b53c5b27e13a0bc3acb67226bd1753127201e69"]'
=>
{
  "address": "2N7Uids8r7j9hxEQKWjXRgZpND94EcjHBuH",
  "redeemScript": "5221026f6576be61034181f4c36effb8b8f9f9595f8a6f5faeb683eec8a26aa7dba66d2102b4fee792200552726a66eff265d4f8210e56216492efbdc902e828874a1bd29f2102f991d93c0d429436197ef8e46b53c5b27e13a0bc3acb67226bd1753127201e6953ae"
}

bitcoin-cli -datadir=/data/node-pool sendtoaddress 2N7Uids8r7j9hxEQKWjXRgZpND94EcjHBuH 5
bitcoin-cli -datadir=/data/node-pool generate 1

bitcoin-cli -datadir=/data/node-alice importaddress 2N7Uids8r7j9hxEQKWjXRgZpND94EcjHBuH "mutipleSig" true

bitcoin-cli -datadir=/data/node-alice getreceivedbyaddress 2N7Uids8r7j9hxEQKWjXRgZpND94EcjHBuH
=> 5.00000000

bitcoin-cli -datadir=./node-alice listunspent

bitcoin-cli createrawtransaction "[{\"txid\":\"4a6f96125f94e15c7f2ac1b3abfc28b3ddd7d3e773f60379e2dd62a54423dc94\",\"vout\":0}]" "{\"2NEwZTixtGzX4feQgqMiiQKEWcY3vA1cbwN\":0.1}"
=> 020000000194dc2344a562dde27903f673e7d3d7ddb328fcabb3c12a7f5ce1945f12966f4a0000000000ffffffff01809698000000000017a914edfb890716c81674a6aebdcbf6b14ce4820e30588700000000

bitcoin-cli -datadir=./node-pool fundrawtransaction 020000000194dc2344a562dde27903f673e7d3d7ddb328fcabb3c12a7f5ce1945f12966f4a0000000000ffffffff01809698000000000017a914edfb890716c81674a6aebdcbf6b14ce4820e30588700000000
=>
{
  "hex": "020000000194dc2344a562dde27903f673e7d3d7ddb328fcabb3c12a7f5ce1945f12966f4a0000000000ffffffff02d8da9f0b0100000017a914205ba0d8a57ee1b0b2e903d5a2ce6fffd5b3bfcd87809698000000000017a914edfb890716c81674a6aebdcbf6b14ce4820e30588700000000",
  "changepos": 0,
  "fee": 0.00003320
}


bitcoin-cli decoderawtransaction 020000000194dc2344a562dde27903f673e7d3d7ddb328fcabb3c12a7f5ce1945f12966f4a0000000000ffffffff02d8da9f0b0100000017a914205ba0d8a57ee1b0b2e903d5a2ce6fffd5b3bfcd87809698000000000017a914edfb890716c81674a6aebdcbf6b14ce4820e30588700000000
=> {
  "txid": "67552cb5cd6ba68478387ee6c25bae6ad3e6375c278d5bda91bdf0ab837dd039",
  "hash": "67552cb5cd6ba68478387ee6c25bae6ad3e6375c278d5bda91bdf0ab837dd039",
  "version": 2,
  "size": 115,
  "vsize": 115,
  "locktime": 0,
  "vin": [
    {
      "txid": "4a6f96125f94e15c7f2ac1b3abfc28b3ddd7d3e773f60379e2dd62a54423dc94",
      "vout": 0,
      "scriptSig": {
        "asm": "",
        "hex": ""
      },
      "sequence": 4294967295
    }
  ],
  "vout": [
    {
      "value": 44.89992920,
      "n": 0,
      "scriptPubKey": {
        "asm": "OP_HASH160 205ba0d8a57ee1b0b2e903d5a2ce6fffd5b3bfcd OP_EQUAL",
        "hex": "a914205ba0d8a57ee1b0b2e903d5a2ce6fffd5b3bfcd87",
        "reqSigs": 1,
        "type": "scripthash",
        "addresses": [
          "2MvCKNsLy9UJyFd4GxAYn6cgyGZ2qw5vYzu"
        ]
      }
    },
    {
      "value": 0.10000000,
      "n": 1,
      "scriptPubKey": {
        "asm": "OP_HASH160 edfb890716c81674a6aebdcbf6b14ce4820e3058 OP_EQUAL",
        "hex": "a914edfb890716c81674a6aebdcbf6b14ce4820e305887",
        "reqSigs": 1,
        "type": "scripthash",
        "addresses": [
          "2NEwZTixtGzX4feQgqMiiQKEWcY3vA1cbwN"
        ]
      }
    }
  ]
}

bitcoin-cli -datadir=/data/node-pool signrawtransaction 020000000194dc2344a562dde27903f673e7d3d7ddb328fcabb3c12a7f5ce1945f12966f4a0000000000ffffffff02d8da9f0b0100000017a914205ba0d8a57ee1b0b2e903d5a2ce6fffd5b3bfcd87809698000000000017a914edfb890716c81674a6aebdcbf6b14ce4820e30588700000000
=>
{
  "hex": "0200000000010194dc2344a562dde27903f673e7d3d7ddb328fcabb3c12a7f5ce1945f12966f4a00000000171600145abe2481616d739e9c1cded73c0d6bd922409218ffffffff02d8da9f0b0100000017a914205ba0d8a57ee1b0b2e903d5a2ce6fffd5b3bfcd87809698000000000017a914edfb890716c81674a6aebdcbf6b14ce4820e3058870247304402203731377b237538eb61d7e12878abb43747765342254e049d490379a315037a11022040d9f063a9bca7bbed8743d892daab5b1b8b0eda81715f34bd4fd89ba42893800121038127eb8cac338ce46afed5454e5a6ece1dc4e46fd5a4c87c20cc00073e78885e00000000",
  "complete": true
}


bitcoin-cli -datadir=/data/node-alice signrawtransaction 0200000000010194dc2344a562dde27903f673e7d3d7ddb328fcabb3c12a7f5ce1945f12966f4a00000000171600145abe2481616d739e9c1cded73c0d6bd922409218ffffffff02d8da9f0b0100000017a914205ba0d8a57ee1b0b2e903d5a2ce6fffd5b3bfcd87809698000000000017a914edfb890716c81674a6aebdcbf6b14ce4820e3058870247304402203731377b237538eb61d7e12878abb43747765342254e049d490379a315037a11022040d9f063a9bca7bbed8743d892daab5b1b8b0eda81715f34bd4fd89ba42893800121038127eb8cac338ce46afed5454e5a6ece1dc4e46fd5a4c87c20cc00073e78885e00000000
=>
{
  "hex": "0200000000010194dc2344a562dde27903f673e7d3d7ddb328fcabb3c12a7f5ce1945f12966f4a00000000171600145abe2481616d739e9c1cded73c0d6bd922409218ffffffff02d8da9f0b0100000017a914205ba0d8a57ee1b0b2e903d5a2ce6fffd5b3bfcd87809698000000000017a914edfb890716c81674a6aebdcbf6b14ce4820e3058870247304402203731377b237538eb61d7e12878abb43747765342254e049d490379a315037a11022040d9f063a9bca7bbed8743d892daab5b1b8b0eda81715f34bd4fd89ba42893800121038127eb8cac338ce46afed5454e5a6ece1dc4e46fd5a4c87c20cc00073e78885e00000000",
  "complete": true
}


bitcoin-cli -datadir=/data/node-pool sendrawtransaction 0200000000010194dc2344a562dde27903f673e7d3d7ddb328fcabb3c12a7f5ce1945f12966f4a00000000171600145abe2481616d739e9c1cded73c0d6bd922409218ffffffff02d8da9f0b0100000017a914205ba0d8a57ee1b0b2e903d5a2ce6fffd5b3bfcd87809698000000000017a914edfb890716c81674a6aebdcbf6b14ce4820e3058870247304402203731377b237538eb61d7e12878abb43747765342254e049d490379a315037a11022040d9f063a9bca7bbed8743d892daab5b1b8b0eda81715f34bd4fd89ba42893800121038127eb8cac338ce46afed5454e5a6ece1dc4e46fd5a4c87c20cc00073e78885e00000000
=>
e0b1d12b4c4e99f4f0143ab9b2faa0de803ba6471f5d3980d5db1550ba925493

bitcoin-cli -datadir=/data/node-pool generate 1


bitcoin-cli -datadir=/data/node-bob getreceivedbyaddress 2NEwZTixtGzX4feQgqMiiQKEWcY3vA1cbwN
0.10000000
```
