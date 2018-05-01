'use strict';

var keccak = require('./lib/keccak').keccak_512;
var jh = require('./lib/jh');
var echo = require('./lib/echo');
var h = require('./lib/helper');

var tribushash = module.exports;

module.exports.echo = function(str,format, output) {
  return echo(str,format,output);
}

module.exports.jh = function(str,format, output) {
  return jh(str,format,output);
}

module.exports.keccak = function(str,format, output) {
  var msg = str;
  if (format === 2) {
    msg = h.int32Buffer2Bytes(str);
  }
  if (output === 1) {
    return keccak['array'](msg);
  } else if (output === 2) {
    return h.bytes2Int32Buffer(keccak['array'](msg));
  } else {
    return keccak['hex'](msg);
  }
}

module.exports.digest = function(str,format, output) {
  var a = jh(a,2,2);
  a = this.keccak(a,2,1);
  a = echo(a,2,2);
  a = a.slice(0,8);
  if (output === 2) {
    return a;
  }
  else if (output === 1) {
    return h.int32Buffer2Bytes(a);
  }
  else {
    return h.int32ArrayToHexString(a);
  }
}
