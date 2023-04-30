#!/usr/bin/env node

const promptmaker = require(".");
const args = process.argv.slice(2);

const prompt = args.length ? promptmaker({ subject: args[0] }) : promptmaker();

process.stdout.write(prompt);
