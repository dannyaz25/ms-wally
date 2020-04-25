var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");
   
const datasource= require("./helpers/datasource");

datasource.loadConnection();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride());

const routes = require('./routes.js');

app.use(routes);

const serve = require("./helpers/serve");

serve.start(app);