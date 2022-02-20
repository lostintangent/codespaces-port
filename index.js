#!/usr/bin/env node

if (!process.env["CODESPACES"]) {
  console.log(
    "This tool can only be run within the context of a GitHub Codespace: https://github.com/features/codespaces."
  );
  return;
}

const port = process.argv[2];
if (!port) {
  console.log(
    "Specify a port in order to retrieve its URL: codespaces-port <port>."
  );
  return;
}

const name = process.env["CODESPACE_NAME"];
const url = `https://${name}-${port}.githubpreview.dev`;

console.log(url);
