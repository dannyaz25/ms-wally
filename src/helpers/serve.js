const http = require('http');
const config = require('./config');

class Serve {
  static start(app) {
    const { port } = config.loadConfigFromProject().application;
    const server = http.createServer(app);
    server.listen(port, () => console.log(`🚀  server running on port ${port}`));
  }
}

module.exports = Serve;
