const path = require('path');
const debugLib = require('debug');
const toml = require('./toml');


const debug = debugLib('bootstrap:cfg');


class Config {
  static loadDefaultConfigFromPackage() {
    debug('loadDefaultConfigFromPackage: local');
    return toml(path.join(__dirname, '..', 'config'))('local');
  }

  static loadConfigFromProject() {
    debug(`loadConfigFromProject: ${process.env.NODE_ENV}`);
    return toml(path.resolve('config'))(process.env.NODE_ENV, 'local');
  }
}

module.exports = Config;
