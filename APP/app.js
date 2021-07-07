"use strict";

const express = require('express');
const app = express();

const mongoose = require('./src/models/db.js');

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/src/public`));

const root = require('./src/apis/root');
const view = require('./src/apis/view');

app.use('/', view);
app.use('/api/', root);

app.get("*", (req, res) => {
    res.render("index");
  });


module.exports = app;

