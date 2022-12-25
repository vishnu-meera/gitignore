#!/usr/bin/env node

const gitIgnore = require("../index");
const arguments = process.argv.splice(2);

if (arguments && arguments[0]) {
    const type = arguments[0].trim()
    if (type) {
        console.log(`Creating gitnore with type ${type} ...`)
        gitIgnore.run(type)
    }
}else {
    console.error(`run the cmd 'getignore <type>' to create gitignore file.`)
}
