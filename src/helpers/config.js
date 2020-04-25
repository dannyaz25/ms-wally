const path =require("path");
const debugLib = require("debug");
const toml = require("../helpers/toml");



const debug = debugLib("bootstrap:cfg");


 class Config {

    loadDefaultConfigFromPackage() {
        debug("loadDefaultConfigFromPackage: local");
        return toml(path.join(__dirname, "..", "config"))("local");
      }
      
    loadConfigFromProject() {
        debug(`loadConfigFromProject: ${process.env.NODE_ENV}`);
        return toml(path.resolve("config"))(process.env.NODE_ENV, "local");
      }
     
}

module.exports = new Config();