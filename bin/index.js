#!/usr/bin/env node

const gitIgnore = require("../index");

// get arguments after first two elements in process.argv
var arguments = process.argv.splice(2);
console.log(arguments)
console.log(gitIgnore.convertCase(arguments[0]))