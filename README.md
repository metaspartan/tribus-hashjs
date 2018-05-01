# tribus-hashjs

> Performs the Tribus hash.

## Installation
```
$ npm install --save tribus-hashjs
```

## Usage

```js
var tribus = require('tribus-hashjs');

tribus.tribus('The great experiment continues.');
// -> '4da3b7c5ff698c6546564ebc72204f31885cd87b75b2b3ca5a93b5d75db85b8c'

tribus.echo('The great experiment continues.');
// -> 'b1db282b1672f3423c1e1bdf4496a8ddda0b6f483e92e9a8be2efbaab0ea230814f1f1485d919285deac13794dc215000eb39a47ac32bfc07299a0475049be2e'

tribus.jh('The great experiment continues.');
// -> '90c7090e9d9a45bc79f476ae7fa3e7e4416d1c26b127d1d418ee9bd96b541933b0f144a0d4c6594944393e39fb6b98ceb54752af55198e00953d638183482521'

tribus.keccak('The great experiment continues.');
// -> '4c7e9c893fcdc87a2fd604574a4a5b9a0b6864665ed19057dedf24858314690ba45d6bbcfb86cd7182d1677e2d30dad9716ee99eb8ea267c6638f47ef20e0226'

```

## API

### tribus(str)

#### str

Type: `string`

Get the tribus hash.

### tribus(str,input,output)

#### str

Type: `string` (input 0), 8 bit `array` (input 1), 32 bit `array` (input 2)

Get the tribus hash as `string` (output 0), a 8 bit `array` (output 1), a 32 bit `array` (output 2).
