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

const id = process.env["CLOUDENV_ENVIRONMENT_ID"];
const url = `https://${id}-${port}.apps.codespaces.githubusercontent.com`;

console.log(url);
