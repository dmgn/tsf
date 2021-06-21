'use strict';
const aws = require('aws-sdk');
var dotenv = require('dotenv');
var secrets = require('./secrets');
dotenv.config();
console.log(" Bucket name :::" + secrets.aws_bucket + ":::");
const s3 = new aws.S3({
    signatureVersion:'v4',
    region: 'us-east-2'
});

exports.signedRequest = function(req, res){
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
        Bucket: 'camerarecordings',
        Key:fileName,
        Expires:3600,
        ContentType:fileType,
        ACL:'private'
    };

    s3.getSignedUrl('putObject', s3Params, (err, data) => {
       if(err){
           console.log(err);
           return res.end();
       } 
       const returnData = {
           signedRequest: data,
           url: `https://camerarecordings.s3.amazonaws.com/${fileName}`
       }
       return res.json(returnData);
    });
};

exports.listFiles = function(req, res){
    const s3Params = {
        Bucket: 'camerarecordings',
        Delimiter:  '/'
    };
    const response = s3.listObjectsV2(s3Params, (err, data) => {
        if(err){
            console.log(err);
            return res.end();
        } 
        return res.json(data);
    }).promise();
    console.log(response);
};

exports.getFileSignedRequest = function(req, res){

    const s3Params = {
        Bucket: 'camerarecordings',
        Key:req.params.fileName,
        Expires:60
    }
    s3.getSignedUrl('getObject', s3Params, (err, data)=> {
        return res.json(data);
    });

};