const ENV = process.env.ENV = process.env.NODE_ENV;

process.env.APIUrl = "";

if (ENV == 'ringproduction') {
  process.env.APIUrl = "https://xxxx-api.azurewebsites.net";
}
else if (ENV == 'ringtest') {
  process.env.APIUrl = "https://xxxx-api-test.azurewebsites.net";
}
else {
  process.env.APIUrl = "https://xxxxx-api-dev.azurewebsites.net";
}

console.log(process.env.APIUrl);
