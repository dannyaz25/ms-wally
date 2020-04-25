const http = require('http');
const config = require('./config');

class Serve{

    start(app){
    
    const port = config.loadConfigFromProject().application.port;
    const server = http.createServer(app);
    server.listen(port, () => console.log(`🚀  server running on port ${port}`));

    }
}

module.exports = new Serve();