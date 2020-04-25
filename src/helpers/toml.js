const toml = require("@iarna/toml");
const fs = require("fs");
const path = require("path");

const TOML_EXTENSION = ".toml";

const parse = (file, encoding = "utf8")=> {
  return toml.parse(fs.readFileSync(file, encoding));
};

const getMap = (dir) => {
  let map=new Map();
  fs.readdirSync(dir)
    .filter((file) => file.endsWith(TOML_EXTENSION))
    .forEach((file) => map.set(path.basename(file, TOML_EXTENSION), () => parse(path.join(dir, file))));
  return (name, defaultConfig = "local") => (map.has(name) ? map.get(name)() : map.get(defaultConfig)());
};

module.exports=  getMap;