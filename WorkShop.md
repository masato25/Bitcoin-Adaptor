```
# generate block
bitcoin-cli -datadir=/data/node-pool generate 101
# getbalance
bitcoin-cli -datadir=/data/node-pool getbalance

bitcoin-cli -datadir=/data/node-alice importprivkey "cUakDAWEeNeXTo3B93WBs9HRMfaFDegXcbEGooLz8BSxRBfmpYcX" "test" true
bitcoin-cli -datadir=/data/node-bob importprivkey "cTMEdR2JxzVMTJCVsCbuStzypevdchxneREZoJjLnmiMVGHTr8wZ" "test" true
bitcoin-cli -datadir=/data/node-pool importprivkey "cQJB6w8SxVNoprVwp2xyxUFxvExMbpR2qj3banXYYXmhtTc1WxC8" "test" true

-> get public from private key (test network)
bitcoin-cli --datadir=/data/node-alice validateaddress 2N6osxNzztmNi77cgm2YntAtnFStkRoEES3
bitcoin-cli --datadir=/data/node-bob validateaddress 2N6G6DS7AszFCtfVFWWasnmassye84pfxXg
bitcoin-cli --datadir=/data/node-pool validateaddress 2MwYYYBHs3axsWYox6FgCTvYWRNmBk2SNyp

* 029d80ff37838e4989a6aa26af41149d4f671976329e9ddb9b78fdea9814ae6ef5
* 020106ca23b4f28dbc83838ee4745accf90e5621fe70df5b1ee8f7e1b3b41b64cb
* 03940ab29fbf214da2d8ec99c47db63879957311bd90d2f1c635828604d5410514

bitcoin-cli -datadir=/data/node-pool sendtoaddress 2N6osxNzztmNi77cgm2YntAtnFStkRoEES3 1
bitcoin-cli -datadir=/data/node-pool sendtoaddress 2N6G6DS7AszFCtfVFWWasnmassye84pfxXg 1
bitcoin-cli -datadir=/data/node-pool sendtoaddress 2MwYYYBHs3axsWYox6FgCTvYWRNmBk2SNyp 1
bitcoin-cli -datadir=/data/node-pool generate 1

bitcoin-cli -datadir=/data/node-alice createmultisig 2 '["03940ab29fbf214da2d8ec99c47db63879957311bd90d2f1c635828604d5410514","020106ca23b4f28dbc83838ee4745accf90e5621fe70df5b1ee8f7e1b3b41b64cb", "029d80ff37838e4989a6aa26af41149d4f671976329e9ddb9b78fdea9814ae6ef5"]'
=>
{
  "address": "2N4jXJyMo8eRKLPWqi5iykAyFLXd6szehwA",
  "redeemScript": "522103940ab29fbf214da2d8ec99c47db63879957311bd90d2f1c635828604d541051421020106ca23b4f28dbc83838ee4745accf90e5621fe70df5b1ee8f7e1b3b41b64cb21029d80ff37838e4989a6aa26af41149d4f671976329e9ddb9b78fdea9814ae6ef553ae"
}

bitcoin-cli -datadir=/data/node-pool sendtoaddress 2N4jXJyMo8eRKLPWqi5iykAyFLXd6szehwA 5
bitcoin-cli -datadir=/data/node-pool generate 1

bitcoin-cli getrawtransaction 040d0cae1f659f9958b951ed2c7b8bc7fe037f11c49247415d52b974be402f06 1

bitcoin-cli -datadir=/data/node-alice importaddress 2N4jXJyMo8eRKLPWqi5iykAyFLXd6szehwA "mutipleSig" true

bitcoin-cli -datadir=/data/node-alice getreceivedbyaddress 2N4jXJyMo8eRKLPWqi5iykAyFLXd6szehwA
=> 5.00000000

bitcoin-cli -datadir=/data/node-alice listunspent 0 9999 '["2N4jXJyMo8eRKLPWqi5iykAyFLXd6szehwA"]' true

# fee -> 0.001
bitcoin-cli -datadir=/data/node-alice createrawtransaction '[{"txid":"040d0cae1f659f9958b951ed2c7b8bc7fe037f11c49247415d52b974be402f06","vout":1}]' '{"2N6G6DS7AszFCtfVFWWasnmassye84pfxXg":0.1,"2N4jXJyMo8eRKLPWqi5iykAyFLXd6szehwA":4.899}'
=> 0200000001062f40be74b9525d414792c4117f03fec78b7b2ced51b958999f651fae0c0d040100000000ffffffff02809698000000000017a9148ec38ff5b8566f1aa80cb9a1fe5bf9846427225287e047331d0000000017a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce8700000000

bitcoin-cli decoderawtransaction 0200000001062f40be74b9525d414792c4117f03fec78b7b2ced51b958999f651fae0c0d040100000000ffffffff02809698000000000017a9148ec38ff5b8566f1aa80cb9a1fe5bf9846427225287e047331d0000000017a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce8700000000
=>{
  "txid": "9086ede5b95303d704183b047f9addf378e3143d77804ad5d1fad3e5f5605857",
  "hash": "9086ede5b95303d704183b047f9addf378e3143d77804ad5d1fad3e5f5605857",
  "version": 2,
  "size": 115,
  "vsize": 115,
  "locktime": 0,
  "vin": [
    {
      "txid": "040d0cae1f659f9958b951ed2c7b8bc7fe037f11c49247415d52b974be402f06",
      "vout": 1,
      "scriptSig": {
        "asm": "",
        "hex": ""
      },
      "sequence": 4294967295
    }
  ],
  "vout": [
    {
      "value": 0.10000000,
      "n": 0,
      "scriptPubKey": {
        "asm": "OP_HASH160 8ec38ff5b8566f1aa80cb9a1fe5bf98464272252 OP_EQUAL",
        "hex": "a9148ec38ff5b8566f1aa80cb9a1fe5bf9846427225287",
        "reqSigs": 1,
        "type": "scripthash",
        "addresses": [
          "2N6G6DS7AszFCtfVFWWasnmassye84pfxXg"
        ]
      }
    },
    {
      "value": 4.89900000,
      "n": 1,
      "scriptPubKey": {
        "asm": "OP_HASH160 7e037d8b8093a7cf3a6ec83aa8c852761a5d0cce OP_EQUAL",
        "hex": "a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce87",
        "reqSigs": 1,
        "type": "scripthash",
        "addresses": [
          "2N4jXJyMo8eRKLPWqi5iykAyFLXd6szehwA"
        ]
      }
    }
  ]
}

bitcoin-cli -datadir=/data/node-bob signrawtransaction '0200000001062f40be74b9525d414792c4117f03fec78b7b2ced51b958999f651fae0c0d040100000000ffffffff02809698000000000017a9148ec38ff5b8566f1aa80cb9a1fe5bf9846427225287e047331d0000000017a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce8700000000' '[{"txid":"7edcd3a8ffef21a27e8312748c910fc22df277faa93306d6c1767808e85c6df3","vout":1,"scriptPubKey":"a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce87","redeemScript":"522103940ab29fbf214da2d8ec99c47db63879957311bd90d2f1c635828604d541051421020106ca23b4f28dbc83838ee4745accf90e5621fe70df5b1ee8f7e1b3b41b64cb21029d80ff37838e4989a6aa26af41149d4f671976329e9ddb9b78fdea9814ae6ef553ae"}]' '["cQJB6w8SxVNoprVwp2xyxUFxvExMbpR2qj3banXYYXmhtTc1WxC8"]'
=>
{
  "hex": "0200000001062f40be74b9525d414792c4117f03fec78b7b2ced51b958999f651fae0c0d0401000000b400473044022050e017a358752e59f4e1703d6627dc3723dae54e51eb6b825a0194b2dc692fb60220080e40a6429dd2278e3842cffc5287e5f8e9331ad210f1e79d235af3135bad29014c69522103940ab29fbf214da2d8ec99c47db63879957311bd90d2f1c635828604d541051421020106ca23b4f28dbc83838ee4745accf90e5621fe70df5b1ee8f7e1b3b41b64cb21029d80ff37838e4989a6aa26af41149d4f671976329e9ddb9b78fdea9814ae6ef553aeffffffff02809698000000000017a9148ec38ff5b8566f1aa80cb9a1fe5bf9846427225287e047331d0000000017a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce8700000000",
  "complete": false,
  "errors": [
    {
      "txid": "040d0cae1f659f9958b951ed2c7b8bc7fe037f11c49247415d52b974be402f06",
      "vout": 1,
      "witness": [
      ],
      "scriptSig": "00473044022050e017a358752e59f4e1703d6627dc3723dae54e51eb6b825a0194b2dc692fb60220080e40a6429dd2278e3842cffc5287e5f8e9331ad210f1e79d235af3135bad29014c69522103940ab29fbf214da2d8ec99c47db63879957311bd90d2f1c635828604d541051421020106ca23b4f28dbc83838ee4745accf90e5621fe70df5b1ee8f7e1b3b41b64cb21029d80ff37838e4989a6aa26af41149d4f671976329e9ddb9b78fdea9814ae6ef553ae",
      "sequence": 4294967295,
      "error": "Unable to sign input, invalid stack size (possibly missing key)"
    }
  ]
}


bitcoin-cli -datadir=/data/node-alice signrawtransaction '0200000001062f40be74b9525d414792c4117f03fec78b7b2ced51b958999f651fae0c0d0401000000b400473044022050e017a358752e59f4e1703d6627dc3723dae54e51eb6b825a0194b2dc692fb60220080e40a6429dd2278e3842cffc5287e5f8e9331ad210f1e79d235af3135bad29014c69522103940ab29fbf214da2d8ec99c47db63879957311bd90d2f1c635828604d541051421020106ca23b4f28dbc83838ee4745accf90e5621fe70df5b1ee8f7e1b3b41b64cb21029d80ff37838e4989a6aa26af41149d4f671976329e9ddb9b78fdea9814ae6ef553aeffffffff02809698000000000017a9148ec38ff5b8566f1aa80cb9a1fe5bf9846427225287e047331d0000000017a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce8700000000' '[{"txid":"69650fda63224e0986652988560324f5d01d63dc518abb3b1b4bbecebfde1f02","vout":1,"scriptPubKey":"a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce87","redeemScript":"522103940ab29fbf214da2d8ec99c47db63879957311bd90d2f1c635828604d541051421020106ca23b4f28dbc83838ee4745accf90e5621fe70df5b1ee8f7e1b3b41b64cb21029d80ff37838e4989a6aa26af41149d4f671976329e9ddb9b78fdea9814ae6ef553ae"}]' '["cUakDAWEeNeXTo3B93WBs9HRMfaFDegXcbEGooLz8BSxRBfmpYcX"]'
=>
{
  "hex": "0200000001062f40be74b9525d414792c4117f03fec78b7b2ced51b958999f651fae0c0d0401000000fc00473044022050e017a358752e59f4e1703d6627dc3723dae54e51eb6b825a0194b2dc692fb60220080e40a6429dd2278e3842cffc5287e5f8e9331ad210f1e79d235af3135bad29014730440220411359ec9b1a3e96ee35a4d184007204b4ba11d223639350324b8258fe067e69022051b42bd90ad9b78ee01882b6ba6e7d356b762a0669676292a5f774b77920d38d014c69522103940ab29fbf214da2d8ec99c47db63879957311bd90d2f1c635828604d541051421020106ca23b4f28dbc83838ee4745accf90e5621fe70df5b1ee8f7e1b3b41b64cb21029d80ff37838e4989a6aa26af41149d4f671976329e9ddb9b78fdea9814ae6ef553aeffffffff02809698000000000017a9148ec38ff5b8566f1aa80cb9a1fe5bf9846427225287e047331d0000000017a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce8700000000",
  "complete": true
}

bitcoin-cli -datadir=/data/node-alice sendrawtransaction 0200000001062f40be74b9525d414792c4117f03fec78b7b2ced51b958999f651fae0c0d0401000000fc00473044022050e017a358752e59f4e1703d6627dc3723dae54e51eb6b825a0194b2dc692fb60220080e40a6429dd2278e3842cffc5287e5f8e9331ad210f1e79d235af3135bad29014730440220411359ec9b1a3e96ee35a4d184007204b4ba11d223639350324b8258fe067e69022051b42bd90ad9b78ee01882b6ba6e7d356b762a0669676292a5f774b77920d38d014c69522103940ab29fbf214da2d8ec99c47db63879957311bd90d2f1c635828604d541051421020106ca23b4f28dbc83838ee4745accf90e5621fe70df5b1ee8f7e1b3b41b64cb21029d80ff37838e4989a6aa26af41149d4f671976329e9ddb9b78fdea9814ae6ef553aeffffffff02809698000000000017a9148ec38ff5b8566f1aa80cb9a1fe5bf9846427225287e047331d0000000017a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce8700000000
=>
ed8a600ed246e4a23e85a4937a8ce76a177e0e10c3dd9af4eb48cad76efdcf1a

bitcoin-cli -datadir=/data/node-pool generate 1


bitcoin-cli -datadir=./node-alice listunspent 0 9999 '["2N4jXJyMo8eRKLPWqi5iykAyFLXd6szehwA"]'
bitcoin-cli -datadir=./node-bob listunspent 0 9999 '["2N6G6DS7AszFCtfVFWWasnmassye84pfxXg"]'

# fee -> 0.001
bitcoin-cli createrawtransaction '[{"txid":"ed8a600ed246e4a23e85a4937a8ce76a177e0e10c3dd9af4eb48cad76efdcf1a","vout":1}]' '{"2N6G6DS7AszFCtfVFWWasnmassye84pfxXg":0.1,"2N4jXJyMo8eRKLPWqi5iykAyFLXd6szehwA":4.798}'
=> 02000000011acffd6ed7ca48ebf49addc3100e7e176ae78c7a93a4853ea2e446d20e608aed0100000000ffffffff02809698000000000017a9148ec38ff5b8566f1aa80cb9a1fe5bf9846427225287c02a991c0000000017a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce8700000000

# spend second round
bitcoin-cli decoderawtransaction 02000000011acffd6ed7ca48ebf49addc3100e7e176ae78c7a93a4853ea2e446d20e608aed0100000000ffffffff02809698000000000017a9148ec38ff5b8566f1aa80cb9a1fe5bf9846427225287c02a991c0000000017a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce8700000000
=>
{
  "txid": "55d58a9e2055fa262cc34a0d23b7bbbce551014cbd1af067bbdd02a3fcde5038",
  "hash": "55d58a9e2055fa262cc34a0d23b7bbbce551014cbd1af067bbdd02a3fcde5038",
  "version": 2,
  "size": 115,
  "vsize": 115,
  "locktime": 0,
  "vin": [
    {
      "txid": "ed8a600ed246e4a23e85a4937a8ce76a177e0e10c3dd9af4eb48cad76efdcf1a",
      "vout": 1,
      "scriptSig": {
        "asm": "",
        "hex": ""
      },
      "sequence": 4294967295
    }
  ],
  "vout": [
    {
      "value": 0.10000000,
      "n": 0,
      "scriptPubKey": {
        "asm": "OP_HASH160 8ec38ff5b8566f1aa80cb9a1fe5bf98464272252 OP_EQUAL",
        "hex": "a9148ec38ff5b8566f1aa80cb9a1fe5bf9846427225287",
        "reqSigs": 1,
        "type": "scripthash",
        "addresses": [
          "2N6G6DS7AszFCtfVFWWasnmassye84pfxXg"
        ]
      }
    },
    {
      "value": 4.79800000,
      "n": 1,
      "scriptPubKey": {
        "asm": "OP_HASH160 7e037d8b8093a7cf3a6ec83aa8c852761a5d0cce OP_EQUAL",
        "hex": "a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce87",
        "reqSigs": 1,
        "type": "scripthash",
        "addresses": [
          "2N4jXJyMo8eRKLPWqi5iykAyFLXd6szehwA"
        ]
      }
    }
  ]
}

bitcoin-cli -datadir=/data/node-alice signrawtransaction '02000000011acffd6ed7ca48ebf49addc3100e7e176ae78c7a93a4853ea2e446d20e608aed0100000000ffffffff02809698000000000017a9148ec38ff5b8566f1aa80cb9a1fe5bf9846427225287c02a991c0000000017a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce8700000000' '[{"txid":"5ea6587788c45ec33757ea8e35fd44cf33455152d133a6635079664a25c5095a","vout":1,"scriptPubKey":"a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce87","redeemScript":"522103940ab29fbf214da2d8ec99c47db63879957311bd90d2f1c635828604d541051421020106ca23b4f28dbc83838ee4745accf90e5621fe70df5b1ee8f7e1b3b41b64cb21029d80ff37838e4989a6aa26af41149d4f671976329e9ddb9b78fdea9814ae6ef553ae"}]' '["cUakDAWEeNeXTo3B93WBs9HRMfaFDegXcbEGooLz8BSxRBfmpYcX"]'
=> {
  "hex": "02000000011acffd6ed7ca48ebf49addc3100e7e176ae78c7a93a4853ea2e446d20e608aed01000000b500483045022100b45342f22fbeafb30f179c0eca605a032eaed3dc5cf6573aa0d4019c78194d71022025612ec840da4d5fe4be8ccd25f3a55dbdea1ef3543c29bb016a50fab0d3dbcc014c69522103940ab29fbf214da2d8ec99c47db63879957311bd90d2f1c635828604d541051421020106ca23b4f28dbc83838ee4745accf90e5621fe70df5b1ee8f7e1b3b41b64cb21029d80ff37838e4989a6aa26af41149d4f671976329e9ddb9b78fdea9814ae6ef553aeffffffff02809698000000000017a9148ec38ff5b8566f1aa80cb9a1fe5bf9846427225287c02a991c0000000017a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce8700000000",
  "complete": false,
  "errors": [
    {
      "txid": "ed8a600ed246e4a23e85a4937a8ce76a177e0e10c3dd9af4eb48cad76efdcf1a",
      "vout": 1,
      "witness": [
      ],
      "scriptSig": "00483045022100b45342f22fbeafb30f179c0eca605a032eaed3dc5cf6573aa0d4019c78194d71022025612ec840da4d5fe4be8ccd25f3a55dbdea1ef3543c29bb016a50fab0d3dbcc014c69522103940ab29fbf214da2d8ec99c47db63879957311bd90d2f1c635828604d541051421020106ca23b4f28dbc83838ee4745accf90e5621fe70df5b1ee8f7e1b3b41b64cb21029d80ff37838e4989a6aa26af41149d4f671976329e9ddb9b78fdea9814ae6ef553ae",
      "sequence": 4294967295,
      "error": "Unable to sign input, invalid stack size (possibly missing key)"
    }
  ]
}


bitcoin-cli -datadir=/data/node-pool signrawtransaction '02000000011acffd6ed7ca48ebf49addc3100e7e176ae78c7a93a4853ea2e446d20e608aed01000000b500483045022100b45342f22fbeafb30f179c0eca605a032eaed3dc5cf6573aa0d4019c78194d71022025612ec840da4d5fe4be8ccd25f3a55dbdea1ef3543c29bb016a50fab0d3dbcc014c69522103940ab29fbf214da2d8ec99c47db63879957311bd90d2f1c635828604d541051421020106ca23b4f28dbc83838ee4745accf90e5621fe70df5b1ee8f7e1b3b41b64cb21029d80ff37838e4989a6aa26af41149d4f671976329e9ddb9b78fdea9814ae6ef553aeffffffff02809698000000000017a9148ec38ff5b8566f1aa80cb9a1fe5bf9846427225287c02a991c0000000017a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce8700000000' '[{"txid":"5ea6587788c45ec33757ea8e35fd44cf33455152d133a6635079664a25c5095a","vout":1,"scriptPubKey":"a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce87","redeemScript":"522103940ab29fbf214da2d8ec99c47db63879957311bd90d2f1c635828604d541051421020106ca23b4f28dbc83838ee4745accf90e5621fe70df5b1ee8f7e1b3b41b64cb21029d80ff37838e4989a6aa26af41149d4f671976329e9ddb9b78fdea9814ae6ef553ae"}]' '["cQJB6w8SxVNoprVwp2xyxUFxvExMbpR2qj3banXYYXmhtTc1WxC8"]'
=> {
  "hex": "02000000011acffd6ed7ca48ebf49addc3100e7e176ae78c7a93a4853ea2e446d20e608aed01000000fdfe0000483045022100f2a4d25b53db06e99fcb19b7633a810160f331596d9e77d5bba826f61e86a223022030f512462ce10b3694ff58cce0ae1a058cef09521e38aecb529941b377d12d4901483045022100b45342f22fbeafb30f179c0eca605a032eaed3dc5cf6573aa0d4019c78194d71022025612ec840da4d5fe4be8ccd25f3a55dbdea1ef3543c29bb016a50fab0d3dbcc014c69522103940ab29fbf214da2d8ec99c47db63879957311bd90d2f1c635828604d541051421020106ca23b4f28dbc83838ee4745accf90e5621fe70df5b1ee8f7e1b3b41b64cb21029d80ff37838e4989a6aa26af41149d4f671976329e9ddb9b78fdea9814ae6ef553aeffffffff02809698000000000017a9148ec38ff5b8566f1aa80cb9a1fe5bf9846427225287c02a991c0000000017a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce8700000000",
  "complete": true
}

bitcoin-cli -datadir=/data/node-alice sendrawtransaction 02000000011acffd6ed7ca48ebf49addc3100e7e176ae78c7a93a4853ea2e446d20e608aed01000000fdfe0000483045022100f2a4d25b53db06e99fcb19b7633a810160f331596d9e77d5bba826f61e86a223022030f512462ce10b3694ff58cce0ae1a058cef09521e38aecb529941b377d12d4901483045022100b45342f22fbeafb30f179c0eca605a032eaed3dc5cf6573aa0d4019c78194d71022025612ec840da4d5fe4be8ccd25f3a55dbdea1ef3543c29bb016a50fab0d3dbcc014c69522103940ab29fbf214da2d8ec99c47db63879957311bd90d2f1c635828604d541051421020106ca23b4f28dbc83838ee4745accf90e5621fe70df5b1ee8f7e1b3b41b64cb21029d80ff37838e4989a6aa26af41149d4f671976329e9ddb9b78fdea9814ae6ef553aeffffffff02809698000000000017a9148ec38ff5b8566f1aa80cb9a1fe5bf9846427225287c02a991c0000000017a9147e037d8b8093a7cf3a6ec83aa8c852761a5d0cce8700000000
=> f9411ffe04e7ecbe30e063a5a63a31b8b9e7b8067749333fbde1aa65acb3ad60

# you will got 2 utxo
bitcoin-cli -datadir=./node-bob listunspent 0 9999 '["2N6G6DS7AszFCtfVFWWasnmassye84pfxXg"]'
```
* more information you can refer https://github.com/anders94/bitcoin-2-of-3-multisig
