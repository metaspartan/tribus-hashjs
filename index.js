'use strict';

var keccak = require('./lib/keccak').keccak_512;
var jh = require('./lib/jh');
var echo = require('./lib/echo');
var h = require('./lib/helper');

/**
 * Error codes
 */
var errors = module.exports.errors = {
    input_not_specified: 'input not specified',
    input_single_invalid_type: 'input must be string when inputFormat is not specified',
    input_format_mismatch_string: 'input format mismatch: input should be an string',
    input_format_mismatch_array: 'input format mismatch: input should be an array',
    input_format_invalid: 'invalid input format',
    output_format_invalid: 'invalid output format'
};

/**
 * Obtain a Tribus hash
 * @param input {string|array|buffer} input data to hash
 * @param inputFormat {number} optional - format of the input: 0: string, 1: 8 bit array/Buffer, 2: 32 bit array
 * @param outputFormat {number} optional - format of the output: 0: string, 1: 8 bit array, 2: 32 bit array
 * @returns {string|array} Tribus hash of input as a string, 8-bit array or 32-bit array
 */
module.exports.digest = function (input, inputFormat, outputFormat) {

    // argument exceptions
    if (input === undefined) {
        throw (errors.input_not_specified);
    } else if (inputFormat === undefined) {

        // single input arg must be string
        if (!(typeof input === 'string' || input instanceof String)) {
            throw (errors.input_single_invalid_type);
        }
    } else {

        // validate input arguments
        if (inputFormat === 0) {
            if (!(typeof input === 'string' || input instanceof String)) {
                throw (errors.input_format_mismatch_string);
            }
        } else if (inputFormat === 1 || inputFormat === 2) {
            if (!Array.isArray(input) && !h.isBuffer(input)) {
                throw (errors.input_format_mismatch_array);
            }
        } else {
            throw (errors.input_format_invalid);
        }

        // validate output format
        if (outputFormat !== undefined
                && outputFormat !== 0
                && outputFormat !== 1
                && outputFormat !== 2) {
            throw (errors.output_format_invalid);
        }
    }

    // obtain the tribus hash of the input
    var a = jh(input, inputFormat, 2);
	a = this.keccak(a, 2, 1);
    a = echo(a, 2, 2);
    a = a.slice(0, 8);

    // output 32-bit array
    if (outputFormat === 2) {
        return h.int32Buffer2Bytes(a);
    }
    // output 8-bit array
    else if (outputFormat === 1) {
        return a;
    }
    // output string
    return h.int32ArrayToHexString(a);
};

// individual tribus hash functions...
module.exports.echo = function (str, format, output) {
    return echo(str, format, output);
};

module.exports.jh = function (str, format, output) {
    return jh(str, format, output);
};

module.exports.keccak = function (str, format, output) {
    var msg = str;
    if (format === 2) {
        msg = h.int32Buffer2Bytes(str);
    }
    if (output === 1) {
        return keccak.array(msg);
    } else if (output === 2) {
        return h.bytes2Int32Buffer(keccak.array(msg));
    }
    return keccak.hex(msg);

};
