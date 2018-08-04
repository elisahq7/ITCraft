

/*jslint node: true */
"use strict"; 

var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
const fclone = require('fclone');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// Start server
const port = process.env.PORT || 8080;
app.use(express.static('../TailoredTech'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/Index.html'));
    res.sendFile(path.join(__dirname + '/Scripts/app.js'));
});
app.listen(port, function(){
    console.log(`Express server listening on port ${port}`);
});

// Add headers
app.use(function (req, res, next) {

    res.setHeader("Content-Type", "application/json; charset=utf-8");

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('json', true);


    // Pass to next layer of middleware
    next();
});
//app.use(express.static(__dirname + '/Assets/CSS'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/sendmail', (req, res) => {
    const msg = fclone(req);
    console.log(req.body);
    sgMail.send(msg.body).then(() => {
        res.status(200).send('success!').end();
    }).catch(e => {
        console.error(e.toString());
        res.status(500).end();
    });
});






