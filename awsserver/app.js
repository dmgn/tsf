const serverless = require('serverless-http');
const express = require('express');
var cors = require('cors');
var awsController = require('./aws-controller');
var dotenv = require('dotenv');
var bodyParser = require('body-parser');
var helmet = require('helmet');
const app = express();
const configval=dotenv.config();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin:true,credentials: true}));
console.log(configval.parsed);
app.get('/aws/sign', awsController.signedRequest);
app.get('/aws/files', awsController.listFiles);
app.get('/aws/files/:fileName', awsController.getFileSignedRequest);
 
module.exports.handler = serverless(app);
