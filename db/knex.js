const environment = process.env.ENVIRONMENT || "development";
const config = require("../knexfile.js")[environment];
console.log("config: ", config);
module.exports = require("knex")({ debug: true, ...config });
